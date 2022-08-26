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

        <title>{{ $restaurant->name . ' - ' . config('app.name', 'Laravel') }}</title>
        <meta name="restaurant-name" content="{{ $restaurant->name }}" />
        @if ($restaurant->logo)
            <link id="favicon" rel="icon" href="{{ asset($restaurant->logo) }}">
        @else
            <link id="favicon" rel="icon" href="{{ asset('images/favicon.png') }}">
        @endif
    @else
        <title>{{ config('app.name', 'Laravel') }}</title>
        <link id="favicon" rel="icon" href="{{ asset('images/favicon.png') }}">
    @endif
</head>

<body class="scrollbar-orange">
    <div id="app">
    </div>
</body>

</html>
