<?php

namespace App\Http\Resources;

use App\Models\NavigationMenu;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\NavigationMenuChildResource;

class NavigationMenuResource extends JsonResource
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
            'id'                => $this->id,
            'title'             => $this->title,
            'slug'              => $this->slug,
            'parent_id'         => $this->parent_id,
            'link'              => $this->link,
            'position'          => $this->position,
            'custom_link'       => $this->custom_link,
           
            'subNavs'           => NavigationMenuChildResource::collection(NavigationMenu::where('parent_id',$this->id)->get()),
            'status'            => $this->status == 1 ? 'Active' : 'Inactive',
            'created_at'        => $this->created_at,
            'updated_at'        => $this->updated_at,
        ];
    }
}