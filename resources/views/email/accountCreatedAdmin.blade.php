<p>An account requires your review and approval:</p>

<p><strong>Name:</strong> {{ $user->name }}</p>
<p><strong>Email:</strong> {{ $user->email }}</p>
<p><strong>Type:</strong> {{ $user->hasRole('seller') ? 'Seller' : 'Customer' }}</p>
