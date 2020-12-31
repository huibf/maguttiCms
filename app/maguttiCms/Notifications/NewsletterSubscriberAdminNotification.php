<?php

namespace App\maguttiCms\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Newsletter;

/**
 * Class NewsletterSubscriberAdminNotification
 * @package App\maguttiCms\Notifications
 */
class NewsletterSubscriberAdminNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public Newsletter $data ;

    /**
     * Create a new notification instance.
     *
     * @param Newsletter $data
     */
    public function __construct(Newsletter $data)
    {
        //
        $this->data = $data;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable): MailMessage
    {

        return (new MailMessage)
            ->subject(trans('website.mail_message.subscribe_newsletter_subject').' - '.config('maguttiCms.website.option.app.name'))
            ->greeting(trans('website.mail_message.greeting_admin'))
            ->line(trans('website.mail_message.subscribe_newsletter_text'))
            ->line($this->data->email)
            ->line('')
            ->salutation(' ');
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
            //
        ];
    }
}
