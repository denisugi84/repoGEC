<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
<meta name="description"
    content="Vuexy admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
<meta name="keywords"
    content="admin template, Vuexy admin template, dashboard template, flat admin template, responsive admin template, web app">
<meta name="author" content="PIXINVENT">
<meta name="csrf-token" content="{{ csrf_token() }}">


<title>GMF Employees Club &copy;{{ date('Y') }}</title>
<link rel="apple-touch-icon" href="/app-assets/images/ico/apple-icon-120.html">
<link rel="shortcut icon" type="image/x-icon"
    href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/ico/favicon.ico">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
    rel="stylesheet">

<!-- BEGIN: Vendor CSS-->
<link rel="stylesheet" type="text/css" href="/app-assets/vendors/css/vendors.min.css">
<link rel="stylesheet" type="text/css" href="/app-assets/vendors/css/forms/select/select2.min.css">
<!-- END: Vendor CSS-->

<!-- BEGIN: Theme CSS-->
<link rel="stylesheet" type="text/css" href="/app-assets/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="/app-assets/css/bootstrap-extended.min.css">
<link rel="stylesheet" type="text/css" href="/app-assets/css/colors.min.css">
<link rel="stylesheet" type="text/css" href="/app-assets/css/components.min.css">
<link rel="stylesheet" type="text/css" href="/app-assets/css/themes/dark-layout.min.css">
<link rel="stylesheet" type="text/css" href="/app-assets/css/themes/bordered-layout.min.css">
<link rel="stylesheet" type="text/css" href="/app-assets/css/themes/semi-dark-layout.min.css">

<!-- BEGIN: Page CSS-->
<link rel="stylesheet" type="text/css" href="/app-assets/css/core/menu/menu-types/vertical-menu.min.css">
<link rel="stylesheet" type="text/css" href="/app-assets/css/plugins/forms/form-validation.css">
<!-- END: Page CSS-->

<!-- BEGIN: Custom CSS-->
<link rel="stylesheet" type="text/css" href="/assets/css/style.css">
<link rel="stylesheet" type="text/css" href="/assets/css/custom.css">
<!-- END: Custom CSS-->


<!-- BEGIN: 3rd CSS-->
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css'
    integrity='sha512-6S2HWzVFxruDlZxI3sXOZZ4/eJ8AcxkQH1+JjSe/ONCEqR9L4Ysq5JdT5ipqtzU7WHalNwzwBv+iE51gNHJNqQ=='
    crossorigin='anonymous' />
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' integrity='sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==' crossorigin='anonymous'/>
<!-- END: 3rd CSS-->

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

{{-- vertical-layout vertical-menu-modern blank-page navbar-floating footer-static --}}

<body class="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  " data-open="click"
    data-menu="vertical-menu-modern" data-col="">

    <div id="app">
        <main-layout />
    </div>


    <!-- BEGIN: Vendor JS-->
    <script src="/app-assets/vendors/js/vendors.min.js"></script>
    <!-- BEGIN Vendor JS-->

    <!-- BEGIN: Page Vendor JS-->
    <script src="/app-assets/vendors/js/forms/select/select2.full.min.js"></script>
    <script src="/app-assets/vendors/js/forms/validation/jquery.validate.min.js"></script>
    <!-- END: Page Vendor JS-->

    <!-- BEGIN: Theme JS-->
    <script src="/app-assets/js/core/app-menu.min.js"></script>
    <script src="/app-assets/js/core/app.min.js"></script>
    <script src="/app-assets/js/scripts/customizer.min.js"></script>
    <!-- END: Theme JS-->

    <!-- BEGIN: 3rd Party JS-->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js'
        integrity='sha512-lbwH47l/tPXJYG9AcFNoJaTMhGvYWhVM9YI43CT+uteTRRaiLCui8snIgyAN8XWgNjNhCqlAUdzZptso6OCoFQ=='
        crossorigin='anonymous'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js'
        integrity='sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA=='
        crossorigin='anonymous'></script>
    <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.7/dist/loadingoverlay.min.js"></script>
    <!-- END: 3rd Party JS-->

    <!-- BEGIN: Page JS-->
    <script src="/app-assets/js/scripts/pages/page-api-key.min.js"></script>
    <!-- END: Page JS-->

    <script src="{{ asset('/js/app.js') }}?v=<?= rand(00,99) ?>"></script>

    <script>
        $(window).on('load', function () {
            if (feather) {
                feather.replace({
                    width: 14,
                    height: 14
                });
            }
        })
    </script>
</body>
<!-- END: Body-->

</html>