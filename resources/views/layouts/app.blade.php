<!DOCTYPE html>
<html lang="en">
<head>
    <title>@yield('title'): {{ config('app.name', 'Julia Rose') }}</title>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ URL::asset('assets/css/app.css') }}" rel="stylesheet" type="text/css">
</head>
    <body>
        {{-- @if (Auth::check()) --}}
        <header>
            <h1><a class="logo" href="/">Julia Rose</a></h1>
        </header>
        {{-- @endif --}}
            @yield('content')
        </section>
        <script type="text/javascript" src="{{ URL::asset('assets/js/jquery.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('assets/js/jquery.pjax.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('assets/js/app.js') }}"></script>
    </body>
</html>
