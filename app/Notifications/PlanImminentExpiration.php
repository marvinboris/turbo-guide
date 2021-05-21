<?php

namespace App\Notifications;

use App\Models\Plan;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PlanImminentExpiration extends Notification implements ShouldQueue
{
    use Queueable;

    public $plan;
    public $days;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Plan $plan, $days)
    {
        $this->plan = $plan;
        $this->days = $days;

        $this->delay((new Carbon($plan->pivot->expiry_date))->subDays($days));
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        if ($this->dontSend($notifiable)) {
            return [];
        }

        return ['mail', 'database'];
    }

    public function dontSend($notifiable)
    {
        return $this->plan->pivot && (($this->plan->pivot->created_at->timestamp !== $this->plan->pivot->updated_at->timestamp) || ($notifiable->auto_renew === 1 && $notifiable->balance > $this->plan->price));
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
            ->line('Your ' . $this->plan->name . ' plan will expire in ' . $this->days . ' ' . ($this->days > 1 ? 'days' : 'day') . '.')
            ->line('Make sure you have enabled auto-renew feature and enough balance to buy your current plan once more.')
            ->action('Auto renew', url('/restaurant/plans/purchase'))
            ->action('Recharge', url('/restaurant/recharges'))
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
            'days' => $this->days,
        ];
    }
}
