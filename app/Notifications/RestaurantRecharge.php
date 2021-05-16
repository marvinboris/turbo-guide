<?php

namespace App\Notifications;

use App\Models\Recharge;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RestaurantRecharge extends Notification
{
    use Queueable;

    public $recharge;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Recharge $recharge)
    {
        $this->recharge = $recharge;
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
            ->line('You successfully made a ' . $this->recharge->amount . ' USD ' . $this->recharge->method->name . ' deposit!')
            ->action('View recharge', url('/restaurant/recharges/' . $this->recharge->id))
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
            'recharge_id' => $this->recharge->id,
            'amount' => $this->recharge->amount,
            'method' => $this->recharge->method,
        ];
    }
}
