<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\NavigationMenu;

class NavigationMenuChildResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'id'         => $this->id,
            'linkText'   => $this->title,
            'linkType'   => $this->custom_link != '1' ? $this->link : 'custom_link',
            'customLink' => $this->custom_link == '1' ? $this->link : null,
            'children'     => NavigationMenuChildResource::collection(NavigationMenu::where('parent_id',$this->id)->get())
        ];
    }
}
