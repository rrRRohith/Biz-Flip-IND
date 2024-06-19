<?php

namespace App\Http\Resources;

use App\Models\NavigationMenu;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class NavigationMenuChildResource extends JsonResource
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
            'id'                => $this->title. '_' .$this->id,
            'linkText'          => $this->title,
            'linkType'          =>  $this->custom_link != '1' ? $this->link : 'custom_link',
            'customLink'        => $this->custom_link == '1' ? $this->link : NULL,
            // 'subNavs'           => NavigationMenuChildResource::collection(NavigationMenu::where('parent_id',$this->id)->get()),
        ];
    }
}