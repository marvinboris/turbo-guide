<?php

namespace App\Console;

use App\Models\Plan;
use App\Models\Restaurant;
use App\Notifications\PlanExpired;
use App\Notifications\PlanImminentExpiration;
use App\Notifications\PlanPurchase;
use Carbon\Carbon;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            $dates = [];
            foreach (Restaurant::get() as $restaurant) {
                if ($restaurant->plan) $dates[(new Carbon($restaurant->plan->pivot->expiry_date))->format('Y-m-d H:i')] = $restaurant;
            }

            $date = Carbon::now()->format('Y-m-d H:i');

            if (isset($dates[$date])) {
                $restaurant = $dates[$date];

                if ($restaurant->auto_renew === 1 && $restaurant->balance >= $restaurant->plan->price) {
                    $plan = Plan::find($restaurant->plan->id);

                    $old_plan = $restaurant->plan;

                    if ($old_plan) $old_plan->pivot->update([
                        'expiry_date' => Carbon::now(),
                    ]);

                    $restaurant->plans()->attach($plan, [
                        'expiry_date' => Carbon::now()->addMonths($plan->months),
                    ]);

                    $restaurant->update([
                        'balance' => $restaurant->balance - $plan->price,
                    ]);

                    $restaurant->notify(new PlanExpired($old_plan));

                    $restaurant->notify(new PlanPurchase($restaurant->plan));

                    $restaurant->notify(new PlanImminentExpiration($restaurant->plan, 3));
                    $restaurant->notify(new PlanImminentExpiration($restaurant->plan, 2));
                    $restaurant->notify(new PlanImminentExpiration($restaurant->plan, 1));
                } else {
                    $old_plan = $restaurant->plan;

                    $restaurant->notify(new PlanExpired($old_plan));
                }
            }
        })->cron('* * * * *');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
