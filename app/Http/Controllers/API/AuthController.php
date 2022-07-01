<?php

namespace App\Http\Controllers\API;

use App\Events\MemberRegistered;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\{
    User,
    Member,
};
use App\Http\Controllers\Lib\NotificationController as Notif;
use Exception;
use Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            $user = User::where('username', $request->username)->whereHas('member')->with(['member.title.permission'])->first();

            if (!$user) {
                return response([
                    'message' => 'Sign-In Failed',
                ], 422);
            }

            // TODO: Please apply access or role or permission or whatever to this logic

            if (!Hash::check($request->password, $user->password)) {
                return response([
                    'message' => 'The given data was invalid !',
                    'errors' => ['password' => ['Password yang anda masukan salah !']]
                ], 422);
            }

            $token = $user->createToken('myapptoken')->plainTextToken;

            return response([
                'token' => $token,
                'user' => $user,
                'message' => 'Login berhasil !',
            ], 200);
        } catch (Exception $e) {
            throw ($e);
        }
    }

    public function checkRegister(RegisterRequest $request)
    {
        return response()->json([
            'status' => true,
            'message' => 'Berhasil melakukan Checking Pendaftar',
            'data' => [
                'nama' => $request->nama,
                'email' => $request->email,
                'nopeg' => $request->nopeg,
                'avatar' => $this->getAvatarAttribute($request->nopeg),
            ]
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $member = new Member;
        $member->is_active = 'n';
        $member->is_approved = 'n';
        $member->nama = $request->nama;
        $member->nopeg = $request->nopeg;
        $member->email = $request->email;
        $member->unit_id = $request->unit['id'];

        if ($member->save()) {

            event(new MemberRegistered($member));

            return response()->json([
                'status' => true,
                'message' => 'Berhasil melakukan Registrasi',
                'data' => []
            ]);
        }
    }

    public function profile()
    {
        if (auth()->user()->user_type == 'admin') {
            return response()->json(auth()->user());
        } else if (auth()->user()->user_type == 'staff') {
            $user = User::with(['member'])->find(auth()->user()->id);

            return response()->json($user);
        }
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'status' => true,
            'message' => 'You have successfully logged out and the token was successfully deleted'
        ];
    }

    public function getAvatarAttribute($nopeg)
    {
        // return 'https://avatars.githubusercontent.com/u/8235099?v=4';
        $avatar_url = 'https://talentlead.gmf-aeroasia.co.id/images/avatar/' . $nopeg . '.jpg';

        if (getimagesize($avatar_url)) {
            return $avatar_url;
        } else {
            return $avatar_url = '/assets/img/avatar.jpg';
        }
    }
}
