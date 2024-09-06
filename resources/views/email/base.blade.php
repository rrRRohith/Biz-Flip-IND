<html>
<head></head>
<body>
    <div style="background-color:#f2f2f7;height:100%;width:100%;display:flex;align-items:center;font-family: 'Google Sans', system-ui;">
        <div style="margin: auto;max-width: 760px;width: 100%;margin-top:4em;margin-bottom:4em;font-size:1.2em;">
            <div style="text-align: center;margin-bottom:2rem">
                <img width="200" src="https://res.cloudinary.com/rr6/image/upload/v1725617820/logo_md3qog.png" alt="">
            </div>
            <div style="background:#fff;padding: 2em;border-radius: .5em;width: 100%;margin: auto;max-width: -webkit-fill-available;">
                @isset($name)<div style="font-size: 1.2em;">Hi @isset($name)<strong>{{ $name }}</strong>@endif,</div> @endif
                <div @isset($name) style="margin-top: 2em;" @endif>
                    {!! $content !!}
                </div>
            </div>
            <div style="text-align: center;margin-top: 3em; ">
                <h1>{{ env('APP_NAME') }}</h1>
                <div>© 2024 {{ env('APP_NAME') }} | <a href="{{ url('/contact') }}" style="text-decoration: none;">Contact us</a></div>
                <p style="margin-top: .5em;">You're receiving this email as you created an account with, or someone sent to you using {{ env('APP_NAME') }}.</p>
            </div>
            @if(!isset($reply_to) || !$reply_to)
            <div style="text-align: center;">
                <small>This is an automated email notification, please do not reply to this email, if you have any concerns, <a style="text-decoration: none;" href="{{ url('/contact') }}">contact us</a></small>
            </div>
            @endif
        </div>
    </div>
</body>
</html>