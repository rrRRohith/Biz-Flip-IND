<?php

namespace App\Http\Controllers\Admin;

use App\Models\NewsSubscriber;
use Illuminate\Http\Request;
use App\Http\Requests\NewsSubscriber\StoreNewsSubscriberRequest;
use App\Http\Requests\NewsSubscriber\UpdateNewsSubscriberRequest;
use App\Http\Resources\NewsSubscriberResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Exception;

class NewsSubscriberController extends Controller
{
   /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subscriberList = NewsSubscriber::query()->paginate(10);
       
        return Inertia::render('Admin/NewsSubscriber/Index',['subscribersList' => NewsSubscriberResource::collection($subscriberList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/NewsSubscriber/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsSubscriberRequest $request)
    {
       
        $new            = new NewsSubscriber();
        $new->firstname = $request->firstname; 
        $new->lastname  = $request->lastname;
        $new->email_id  = $request->email_id;
        $new->categories = implode(',',$request->type_of_needed);
        $new->status    = $request->status;
        try{
            $new->save();			
            return to_route('admin.subscribers.index')->with('success', 'subscriber was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(NewsSubscriber $subscriber)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        $label = NewsSubscriber::where('id',$id)->first();
        return Inertia::render('Admin/NewsSubscriber/Edit',['subscriber_item' => new NewsSubscriberResource($label),'success' => session('success'),'error' => session('error')]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsSubscriberRequest $request,$id)
    {
        //
        $subscriber = NewsSubscriber::where('id',$id)->first() ?? abort(404);
        $subscriber->firstname    = $request->firstname;
        $subscriber->lastname     = $request->lastname;
        $subscriber->email_id     = $request->email_id;
        $subscriber->categories = implode(',',$request->type_of_needed);
        $subscriber->status       = $request->status;
        $subscriber->save();

        return to_route('admin.subscribers.index')
            ->with('success', "News Subscriber \"$subscriber->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $subscriber = NewsSubscriber::where('id',$id)->first() ?? abort(404);
        $name = $subscriber->name;
        $subscriber->delete();
        
        return to_route('admin.subscribers.index')
            ->with('success', "News Subscriber \"$name\" was deleted");
    }
}
