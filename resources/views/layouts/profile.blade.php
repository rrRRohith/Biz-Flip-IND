<div class="d-flex align-items-center">
    <div class="dropdown ms-3 me-lg-3 me-2">
        @php
            $notifications = \App\Models\DashboardNotification::where('recipient_id', auth()->user()->id ?? null)
                ->whereNull('read_at')
                ->paginate(6);
        @endphp
        <div class="dropdown-toggle notification position-relative" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            <span class="count fw-bolder position-absolute end-0 d-flex align-items-center">
                <span class="m-auto small fw-normal">
                    {{ $notifications->count() }}
                </span>
            </span>
            <span class="bi bi-bell fs-20"></span>
        </div>
        <ul
            class="dropdown-menu profile-dropdown text-overflow rounded-2 pb-2 dropdown-menu-end border-0 shadow-sm p-0 mt-4">
            @foreach ($notifications as $notification)
                <a href="{{ $notification->redirection }}" title="{{ $notification->subject }}"
                    data-rr-ui-dropdown-item="" class="dropdown-item text-overflow">{{ $notification->subject }}</a>
            @endforeach
        </ul>
    </div>
    <div class="dropdown">
        <div role="button" class="cursor-pointer" data-bs-toggle="dropdown">
            <img class="rounded-circle shadow-sm header-image" src="{{ $user->picture_url }}" alt="">
        </div>
        <ul
            class="dropdown-menu profile-dropdown text-overflow rounded-2 pb-2 dropdown-menu-end border-0 shadow-sm p-0 mt-4">
            <div class="d-flex align-items-center text-overflow p-2 px-3">
                <div class="text-overflow">
                    <div class="text-muted small">Signed in as</div>
                    <p class="mb-0 text-overflow">{{ $user->name }}</p>
                    <div class="text-muted text-overflow small">{{ $user->email }}</div>
                </div>
            </div>
            <hr class="light" />
            @if (auth()->user()->type == 'admin' || auth()->user()->type == 'admin staff')
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/admin"><span
                            class="d-flex align-items-center"><i class="bi bi-speedometer me-3"></i> Dashboard
                        </span></a></li>
                <hr class="light" />
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/admin/profile"><span
                            class="d-flex align-items-center"><i class="bi bi-pencil me-3"></i> Profile </span></a></li>
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/admin/password"><span
                            class="d-flex align-items-center"><i class="bi bi-shield-lock me-3"></i> Security
                        </span></a>
                </li>
            @elseif(auth()->user()->type == 'seller' || auth()->user()->type == 'seller staff')
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/account"><span
                            class="d-flex align-items-center"><i class="bi bi-speedometer me-3"></i> Dashboard
                        </span></a></li>
                <hr class="light" />
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/account/profile"><span
                            class="d-flex align-items-center"><i class="bi bi-pencil me-3"></i> Profile </span></a></li>
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/account/password"><span
                            class="d-flex align-items-center"><i class="bi bi-shield-lock me-3"></i> Security
                        </span></a>
                </li>
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/account/invoices"><span
                    class="d-flex align-items-center"><i class="bi bi-receipt me-3"></i> Billing </span></a></li>
            @elseif(auth()->user()->type == 'customer')
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/customer"><span
                            class="d-flex align-items-center"><i class="bi bi-speedometer me-3"></i> Dashboard
                        </span></a></li>
                <hr class="light" />
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/customer/profile"><span
                            class="d-flex align-items-center"><i class="bi bi-pencil me-3"></i> Profile </span></a></li>
                <li><a class="dropdown-item rounded-1 p-2 px-3" href="/customer/password"><span
                            class="d-flex align-items-center"><i class="bi bi-shield-lock me-3"></i> Security
                        </span></a>
                </li>
             @endif   
            <hr class="light" />
            <li><a class="dropdown-item rounded-1 p-2 px-3" href="{{ route('logout') }}" data-method="post"><span
                        class="d-flex align-items-center"><i class="bi bi-box-arrow-left me-3"></i> Logout </span></a>
            </li>
        </ul>
    </div>

</div>
