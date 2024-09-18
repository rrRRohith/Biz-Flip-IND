<html>

<head>
    <meta http-equiv="Content-Type" content="charset=utf-8" />
    <style type="text/css">
        @font-face {
            font-family: "source_sans_proregular";
            src: local("Source Sans Pro"), url("fonts/sourcesans/sourcesanspro-regular-webfont.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;

        }

        body {
            font-family: "source_sans_proregular", Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
        }
    </style>
</head>

<body>
    @include('email.subscriptionOrder', ['order' => $invoice])
    <div>
        Thank you for your subscription! We appreciate your continued support and look forward to providing you with
        excellent service.
    </div>
</body>

</html>
