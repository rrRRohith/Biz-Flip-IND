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
            'picture_desktop'=>  $this->picture_desktop ? image_url($this->picture_desktop) : asset('/assets/admin/images/noimage.webp'),
            'picture_mobile'=>  $this->picture_mobile ? image_url($this->picture_mobile) : asset('/assets/admin/images/noimage.webp'),
            'position'      =>  $this->position,
            'status'        =>  $this->status,
            'created_at'    =>  (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'    =>  (new Carbon($this->updated_at))->format('h:i a, d M'),
        ];
    }
}