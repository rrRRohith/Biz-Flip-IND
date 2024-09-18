<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NavigationMenuResource extends JsonResource
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
            'id'          => $this->id,
            'title'       => $this->title,
            'slug'        => $this->slug,
            'parent_id'   => $this->parent_id,
            'link'        => $this->link,
            'position'    => $this->position,
            'custom_link' => $this->custom_link,
            'children'     => NavigationMenuChildResource::collection(
                $this->whenLoaded('children') // Use whenLoaded to include children only when loaded
            ),
            'status'      => $this->status == 1 ? 'Active' : 'Inactive',
            'created_at'  => $this->created_at,
            'updated_at'  => $this->updated_at,
        ];
    }
}
