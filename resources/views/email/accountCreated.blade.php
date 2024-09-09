@if($user->hasRole('seller'))
<div>
    <p>Thank you for creating a seller account at {{ env('APP_NAME') }}!</p>
    <p>As a seller, you are entitled to free advertisements for the first month. This is a great opportunity to showcase your products or services to a broader audience at no extra cost. Please log in to your account to manage your advertisements and explore additional features available to you.</p>
    <p>We are excited to see what you will offer our community!</p>
</div>
@else
<div>
    <p>Thank you for creating a customer account at {{ env('APP_NAME') }}!</p>
    <p>With a customer account, you can directly communicate with sellers, inquire about products or services, and make informed purchasing decisions. Our platform is designed to facilitate smooth interactions between buyers and sellers, ensuring you have the best shopping experience possible.</p>
    <p>We look forward to assisting you with your purchases and hope you enjoy your time on our platform!</p>
</div>
@endif
@if($user->status == '0')
<div>
    <p>Your account is currently under review.</p>
    <p>Our team is carefully reviewing your information to ensure everything meets our standards. This process helps us maintain a high-quality community for all users. Please allow us some time to complete this review.</p>
    <p>Once approved, you will have full access to your {{ env('APP_NAME') }} account and can start exploring all the features and benefits we offer. We appreciate your patience and understanding.</p>
    <p>If you have any questions in the meantime, feel free to contact our support team.</p>
</div>
@endif
