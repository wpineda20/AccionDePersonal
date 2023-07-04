<!doctype html>
<html
    lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    dir="ltr"
>

<head>
    <meta charset="utf-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
    >

    <!-- CSRF Token -->
    <meta
        name="csrf-token"
        content="{{ csrf_token() }}"
    >

    <title>{{ config('app.name', 'Base') }}</title>

    <!-- Scripts -->
    <script
        src="{{ mix('js/manifest.js') }}"
        defer
    ></script>
    <script
        src="{{ mix('js/vendor.js') }}"
        defer
    ></script>
    <script
        src="{{ mix('js/app.js') }}"
        defer
    ></script>
    <script
        src="{{ asset('js/sidebar.js') }}"
        defer
    ></script>

    <!-- Styles -->
    <link
        href="{{ mix('css/app.css') }}"
        rel="stylesheet"
    >

    <!-- Favicon -->
    <link
        rel="icon"
        href="{{ asset('img/Favicon.png') }}"
    >
    @yield('css')

    @yield('header')
</head>

<body>
    <div id="app">
        <!-- Sidebar -->
        <div class="sidebar animate__faster animate__animated animate__slideOutLeft">
            <ul class="nav-links pt-0">
                <li class="text-center close-btn">
                    <i class="material-icons md-36 mx-auto  mt-0 pt-0">close</i>
                </li>

                @auth
                <!-- Home -->
                <li class="text-center pb-1">
                    <a
                        href="{{ url('/home') }}"
                        class="text-center"
                    >
                        <i class="material-icons md-18 mx-auto">dashboard</i>
                    </a>
                    <a href="{{ url('/home') }}">
                        <p class="link mx-auto">Dashboard</p>
                    </a>
                </li>
                <!-- Home -->
                <!-- A.P -->
                <li class="text-center pb-1">
                    <a
                        href="{{ url('/personnelAction') }}"
                        class="text-center"
                    >
                        <i class="material-icons md-18 mx-auto">fact_check</i>
                    </a>
                    <a href="{{ url('/personnelAction') }}">
                        <p class="link mx-auto">Formulario</p>
                    </a>
                </li>
                <!-- A.P -->

                <!-- Mis A.P -->
                <li class="text-center pb-1">
                    <a
                        href="{{ url('/userPersonnelActions') }}"
                        class="text-center"
                    >
                        <i class="material-icons md-18 mx-auto">assignment_ind</i>
                    </a>
                    <a href="{{ url('/userPersonnelActions') }}">
                        <p class="link mx-auto">Mis A.P</p>
                    </a>
                </li>
                <!-- Mis A.P -->

                <!-- Verification A.P -->
                @if (auth()->user()->hasRole(['Administrador', 'Jefe', 'Coordinador', 'RRHH']) ||
                auth()->user()->hasUsersInCharge())
                <li class="text-center pb-1">
                    <a
                        href="{{ url('/verifyPersonnelActions') }}"
                        class="text-center"
                    >
                        <i class="material-icons md-18 mx-auto">verified_user</i>
                    </a>
                    <a href="{{ url('/verifyPersonnelActions') }}">
                        <p class="link mx-auto">Autorización</p>
                    </a>
                </li>
                @endif
                <!-- Verification A.P -->

                <!-- Settings -->
                <!-- Administrative routes -->
                @if (auth()->user()->hasRole('Administrador') == 'Administrador')
                <li>
                    <div class="icon-link pb-1">
                        <a
                            href="#"
                            class="arrow text-center"
                        >
                            <i class="material-icons md-18 mx-auto">settings</i>
                        </a>
                        <p
                            class="link"
                            style="margin-left:5px"
                        >Administración</p>
                    </div>
                    <ul class="sub-menu">
                        <li><a href="{{ url('/justificationTypes') }}">Tipos justificación</a></li>
                        <li><a href="{{ url('/dependencies') }}">Dependencias</a></li>
                        <li><a href="{{ url('/status') }}">Estados</a></li>
                        <li><a href="{{ url('/users') }}">Usuarios</a></li>
                    </ul>
                </li>
                @endif
                <!-- End Administrative routes -->
                <!-- Settings -->
                @endauth

                <!-- Login/Logout -->
                @guest
                <li class="text-center pb-1">
                    <a
                        href="{{ url('/login') }}"
                        class="text-center"
                    >
                        <i class="material-icons md-18 mx-auto">login</i>
                    </a>
                    <a href="{{ url('/login') }}">
                        <p class="link mx-auto">Iniciar sesión</p>
                    </a>
                </li>
                @endguest
                <!-- Login/Logout -->
            </ul>
        </div>
        <!-- Sidebar -->

        <!-- Home Section -->
        <div class="home-section">
            <div class="home-content pt-5 pb-5">
                <div class="container-fluid">
                    <div class="col-12 col-sm-12 col-md-12">
                        <div class="row p-0 m-0">
                            @auth
                            <div class="col-4 col-md-1 menu my-auto">
                                <div class="col-3 col-sm-3 menu my-auto">
                                    <i class="material-icons md-36 mx-auto menu color-secondary my-auto">menu</i>
                                </div>
                            </div>
                            @endauth
                            @guest
                            <div class="col-6 col-md-1 menu pt-0 mt-0 d-block d-md-none d-lg-none d-xl-none">
                                <div class="col-3 col-sm-3 menu">
                                    <i class="material-icons md-36 mx-auto menu color-secondary">menu</i>
                                </div>
                            </div>
                            @endguest

                            <!-- Institution Name -->
                            <div class=" col-sm-4 col-md-4 d-none d-md-block d-lg-block d-xl-block">
                                <div class="col-4 col-sm-12">
                                    <a
                                        class="navbar-brand"
                                        href="{{ url('/home') }}"
                                    >
                                        <h3 class="pt-4 fw-bold color-secondary mb-0">Sistema de acciones
                                            de personal
                                        </h3>
                                    </a>
                                </div>
                            </div>
                            <!-- Institution Name -->

                            <!-- Logo Brand -->
                            {{-- <div class=" col-sm-4 col-md-6 d-none d-md-block d-lg-block d-xl-block">
                                <div class="col-4 col-sm-12 mb-2">
                                    <a
                                        class="navbar-brand"
                                        href="{{ url('/') }}"
                                    >
                                        <img
                                            class=""
                                            src="/logos/Logo_GOES_horizontal_D.svg"
                                            style="max-width: 60%"
                                        />
                                    </a>
                                </div>
                            </div> --}}
                            <!-- Logo Brand -->

                            @auth
                            <!-- Logout/UserName -->
                            <div
                                class="col-6 col-md-7 col-sm-6 d-none d-md-block d-lg-block d-xl-block"
                                style="display: flex; justify-content: center; align-items:center"
                            >
                                <div class="row pt-4">
                                    <div
                                        class="col-12 col-sm-12 col-md-12 p-0 text-end"
                                        style="display: flex; justify-content: flex-end; align-items:start"
                                    >
                                        <span
                                            class="color-secondary"
                                            style="font-size: 16px;"
                                        >
                                            {{ auth()->user()->name }}
                                        </span>
                                        <span class="color-primary mx-1"><i
                                                class="material-icons"
                                                style="text-align:center"
                                            >person</i></span>
                                    </div>

                                    <div class="col-12 col-sm-12 col-md-12 pb-0 pt-0 text-end">
                                        <a
                                            href="{{ route('logout') }}"
                                            class="btn-logout"
                                            onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                                        >
                                            {{ __('Logout') }}
                                        </a>
                                        <form
                                            id="logout-form"
                                            action="{{ route('logout') }}"
                                            method="POST"
                                            class="d-none"
                                        >
                                            @csrf
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Logout/UserName -->
                            @endauth
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Home Section -->

        <!-- Main -->
        <main class="main content py-4">
            @yield('content')
        </main>
        <!-- Main -->

        <!-- Footer  -->
        <footer-vue />
        <!-- Footer  -->
    </div>

    <!-- Scripts -->
    @yield('scripts')
</body>

</html>