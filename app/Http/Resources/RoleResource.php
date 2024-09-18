<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class RoleResource extends JsonResource
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
            'id'            => $this->id,
            'name'          => $this->name,
            'guard_name'    => $this->guard_name,
            'permissions'   => $this->permissions->pluck('name','id'),
            'created_at'    => (new Carbon($this->created_at)),
            'updated_at'    => (new Carbon($this->updated_at)),
            'updated_text' => \Carbon\Carbon::parse($this->updated_at)->format('h:i a, d M'),
            'total_permissions' => $this->permissions()->count(),
        ];
    }
}

