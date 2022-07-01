<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmailRequest;
use Illuminate\Http\Request;

use App\Models\SMTP;

class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $smtp = SMTP::first();

        if (!$smtp) {
            $smtp = [
                'host' =>  '',
                'smtp_auth' =>  true,
                'username' =>  '',
                'password' =>  '',
                'smtp_secure' =>  'tls',
                'port' =>  587,
            ];
        }

        return response()->json($smtp, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmailRequest $request)
    {
        $smtp = SMTP::first();

        if (!$smtp) {
            $smtp = new SMTP;
        }

        $smtp->host = $request->host;
        $smtp->username = $request->username;
        $smtp->password = $request->password;
        $smtp->port = $request->port;
        $smtp->smtp_auth = $request->smtp_auth;
        $smtp->smtp_secure = $request->smtp_secure;

        if ($smtp->save()) {
            return response()->json([
                'status' => true,
                'mesasge' => 'Berhasil memperbaharui Pengaturan SMTP Client / Email'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
