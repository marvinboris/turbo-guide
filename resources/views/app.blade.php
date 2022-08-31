<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    @if (Request::segment(1) === 'restaurants')
        @php
            $restaurant = \App\Models\Restaurant::whereSlug(Request::segment(2))->first();
        @endphp

        <!-- PWA  -->
        <meta name="theme-color" content="#6777ef" />

        <title>{{ $restaurant->name . ' - ' . config('app.name', 'Laravel') }}</title>
        <meta name="app-name" content="{{ config('app.name', 'Laravel') }}" />
        <meta name="restaurant-name" content="{{ $restaurant->name }}" />
        <meta name="restaurant-slug" content="{{ $restaurant->slug }}" />

        @if ($restaurant->logo)
            <link rel="apple-touch-icon" href="{{ asset($restaurant->logo) }}">
            <link id="favicon" rel="icon" href="{{ asset($restaurant->logo) }}">
        @else
            <link rel="apple-touch-icon" href="{{ asset('images/favicon.png') }}">
            <link id="favicon" rel="icon" href="{{ asset('images/favicon.png') }}">
        @endif

        <script>
            const restaurant_name = document.head.querySelector('meta[name=restaurant-name]').content;
            const restaurant_slug = document.head.querySelector('meta[name=restaurant-slug]').content;
            const logo = document.head.querySelector('link[rel=apple-touch-icon]').href;
            const manifest = {
                "name": document.title,
                "short_name": document.title,
                "start_url": location.origin + "/restaurants/" + restaurant_slug,
                "background_color": "#6777ef",
                "description": restaurant_name + " - Digital Restaurant Menu",
                "display": "fullscreen",
                "theme_color": "#e98809",
                "icons": [{
                    "src": logo.includes('/images/favicon.png') ? location.origin + "/images/icon-512x512.png" :
                        logo,
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "any maskable"
                }]
            };

            const string_manifest = JSON.stringify(manifest);
            const link = document.createElement('link');
            link.rel = 'manifest';
            link.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(string_manifest));
            document.head.appendChild(link);

            window.deferredPrompt = null;
            const windowBeforeInstallPrompt = (e) => {
                console.log('windowBeforeInstallPrompt');
                e.preventDefault();
                window.deferredPrompt = e;
            }
            window.addEventListener('beforeinstallprompt', windowBeforeInstallPrompt);
            window.matchMedia('(display-mode: standalone)').addEventListener('change', ({
                matches
            }) => {
                if (matches) {
                    $('.install-app-btn-container').hide();
                } else {
                    $('.install-app-btn-container').show();
                }
            });
        </script>
    @else
        <title>{{ config('app.name', 'Laravel') }}</title>
        <link rel="apple-touch-icon" href="{{ asset('images/favicon.png') }}">
        <link id="favicon" rel="icon" href="{{ asset('images/favicon.png') }}">
    @endif
</head>

<body class="scrollbar-orange">
    <div id="app">
    </div>

    <script src="{{ asset('/sw.js') }}"></script>
    <script>
        if ('serviceWorker' in navigator) {
            if (!navigator.serviceWorker.controller) {
                navigator.serviceWorker.register("/sw.js").then(function(reg) {
                    console.log("Service worker has been registered for scope: " + reg.scope);
                });
            }
        } else console.log('No service worker');
    </script>
</body>

</html>
