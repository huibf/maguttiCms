<?php

namespace App\maguttiCms\Website\Controllers;

use App\Http\Controllers\Controller;
use App\maguttiCms\Notifications\ContactRequest;
use App\maguttiCms\Notifications\NewsletterSubscriberAdminNotification;
use App\maguttiCms\Notifications\NewsletterSubscribeUserNotification;
use App\maguttiCms\Tools\JsonResponseTrait;
use App\maguttiCms\Website\Requests\AjaxFormRequest;
use Illuminate\Support\Facades\Notification;
use Input;
use Validator;
use App\Newsletter;

class APIController extends Controller
{
    protected $articleRepo;
    use JsonResponseTrait;

    /**
     * @return mixed
     */
    public function subscribeNewsletter(AjaxFormRequest $request)
    {
        $validator = Validator::make($request->all(), $request->rules());

        // INSERT RECORD IN DATABASE
        $newsletter = new Newsletter;
        $newsletter->locale = get_locale();
        $newsletter->email = sanitizeParameter($request->email);
        $newsletter->save();

        Notification::route('mail', config('maguttiCms.website.option.app.email'))
                      ->notify(new NewsletterSubscriberAdminNotification($newsletter));

        Notification::route('mail', $newsletter->email)
                     ->notify(new NewsletterSubscribeUserNotification($newsletter));

        return $this->responseSuccess(trans('website.mail_message.subscribe_newsletter_feedback'))->apiResponse();

    }

    public function updateGhost(AjaxFormRequest $request)
    {
        //	vars
        $id = $request->id;
        $model = $request->model;
        $field = $request->field;
        $value = $request->value;
        $response = ['alerts' => []];
        $status = 0;

        if (in_array($model, config('maguttiCms.website.option.ghost_input.models'))) {
            $model = app('App\\' . $model)::find($id);
            $model->$field = $value;
            $model->save();
            array_push($response['alerts'], [
                'text' => trans('website.ghost.updated'),
                'type' => 'success',
                'time' => 3
            ]);
        } else {
            array_push($response['alerts'], [
                'text' => trans('website.ghost.forbidden'),
                'type' => 'warning',
                'time' => 5
            ]);
        }
        return response()->json($response);
    }

}
