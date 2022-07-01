<?php

namespace App\Providers;

// use App\Models\SMTP;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // $smtp = SMTP::first()->toArray();

        // if (!$smtp) {
        //     $smtp = [
        //         'host' =>  '',
        //         'smtp_auth' =>  true,
        //         'username' =>  '',
        //         'password' =>  '',
        //         'smtp_secure' =>  'tls',
        //         'port' =>  587,
        //     ];
        // }

        // config([
        //     'mail.mailers.smtp.host' => $smtp['host'],
        //     'mail.mailers.smtp.port' => $smtp['port'],
        //     'mail.mailers.smtp.encryption' => $smtp['smtp_secure'],
        //     'mail.mailers.smtp.username' => $smtp['username'],
        //     'mail.mailers.smtp.password' => $smtp['password'],
        // ]);
    }
}
