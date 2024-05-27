<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class BannerResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            =>  $this->id,
            'title'         =>  $this->title,
            'redirection'   =>  $this->redirection,
            'type'          =>  $this->type,
            'new_window'    =>  $this->new_window,
            'picture_desktop'=> $this->picture_desktop && !(str_starts_with($this->picture_desktop, 'http')) ?
                                asset('images/'.$this->picture_desktop) : $this->picture_desktop,
            'picture_mobile'=>  $this->picture_mobile && !(str_starts_with($this->picture_mobile, 'http')) ?
                                 asset('images/'.$this->picture_mobile) : $this->picture_mobile,
            'position'      =>  $this->position,
            'status'        =>  $this->status == 1 ? 'Published' : 'Draft',
            'created_at'    =>  (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at'    =>  (new Carbon($this->updated_at))->format('Y-m-d'),
        ];
    }
}