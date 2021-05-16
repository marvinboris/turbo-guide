<?php

namespace App\Notifications;

use App\Models\Plan;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PlanExpired extends Notification implements ShouldQueue
{
    use Queueable;

    public $plan;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Plan $plan)
    {
        $this->plan = $plan;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->greeting('Hello!')
            ->line('Your ' . $this->plan->name . ' plan has just expired.')
            ->action('Purchase new plan', url('/restaurant/plans/purchase'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'plan_restaurant_id' => $this->plan->pivot->id,
            'name' => $this->plan->name,
        ];
    }
}
