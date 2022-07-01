<?php

use App\Http\Controllers\API\{
    AuthController,
    DashboardController,
    MemberController,
    DinasController,
    EmailController,
    MeetingController,
    NotificationController,
    TitleController,
    UnitController,
    PermissionController,
    ProfileController
};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', [
    AuthController::class, 'profile'
]);

Route::get('send-email', function () {
    Mail::raw('Hello World!', function ($msg) {
        $msg->to('finallyantonio@gmail.com')->subject('Test Email');
    });
});

Route::prefix('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('check-register', [AuthController::class, 'checkRegister']);
});


Route::prefix('dinas')->group(function () {
    Route::get('/', [DinasController::class, 'index']);
});

Route::prefix('meeting')->group(function () {
    Route::post('/{meeting_id}/rfid_tap', [MeetingController::class, 'rfidTap']);
});


Route::group(['prefix' => 'unit'], function () {
    Route::get('/', [UnitController::class, 'index']);
    Route::get('/{unit_id}', [UnitController::class, 'show']);
});

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::prefix('dashboard')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->middleware('can:dashboard');
    });

    Route::prefix('setting')->group(function () {
        Route::resource('email', EmailController::class)->middleware('can:setting-email');
    });

    Route::prefix('profile')->group(function () {
        Route::get('/', [ProfileController::class, 'index']);
        Route::post('/', [ProfileController::class, 'store']);
    });

    Route::prefix('notification')->group(function () {
        Route::get('/', [NotificationController::class, 'index']);
        Route::put('/{id}/set_viewed', [NotificationController::class, 'setViewed']);
        Route::get('/count', [NotificationController::class, 'getCount']);
    });

    Route::prefix('member')->group(function () {
        Route::get('/', [MemberController::class, 'index'])->middleware('can:member-index');
        Route::get('/{id}', [MemberController::class, 'show'])->middleware('can:member-detail');
        Route::put('/{id}', [MemberController::class, 'update'])->middleware('can:member-edit');
        Route::post('/', [MemberController::class, 'store'])->middleware('can:member-add');
        Route::put('/{id}/login', [MemberController::class, 'applyLogin'])->middleware('can:member-edit');
        Route::delete('/{id}', [MemberController::class, 'destroy'])->middleware('can:member-delete');

        Route::post('/import_xlsx', [MemberController::class, 'importXLSX'])->middleware('can:member-add');
        Route::get('/get/no_anggota', [MemberController::class, 'generateNoAnggota']);
        Route::put('/{id}/change_status', [MemberController::class, 'changeStatus'])->middleware('can:member-edit');
        Route::put('/{id}/restore', [MemberController::class, 'restore'])->middleware('can:member-edit');
        Route::put('/{id}/approve', [MemberController::class, 'approve'])->middleware('can:member-approval');
        Route::put('/{id}/reject', [MemberController::class, 'reject'])->middleware('can:member-approval');
        Route::delete('/{id}/delete', [MemberController::class, 'permanentDelete'])->middleware('can:member-delete');
    });

    Route::prefix('title')->group(function () {

        Route::get('/get/level', [TitleController::class, 'getLevel']);

        Route::put('/{title_id}/add_member', [TitleController::class, 'addMember'])->middleware('can:title-add');
        Route::put('/{title_id}/delete_member', [TitleController::class, 'deleteMmember'])->middleware('can:title-delete');
        Route::put('/{id}/update_permission', [TitleController::class, 'updatePermission'])->middleware('can:title-edit');
        Route::get('/{id}/get_permission', [TitleController::class, 'getPermission']);

        Route::get('/', [TitleController::class, 'index'])->middleware('can:title-index');
        Route::get('/{id}', [TitleController::class, 'show'])->middleware('can:title-detail');
        Route::put('/{id}', [TitleController::class, 'update'])->middleware('can:title-edit');
        Route::post('/', [TitleController::class, 'store'])->middleware('can:title-add');
        Route::delete('/{id}', [TitleController::class, 'destroy'])->middleware('can:title-delete');
    });

    Route::prefix('permission')->group(function () {
        Route::get('/', [PermissionController::class, 'index']);
    });

    Route::prefix('meeting')->group(function () {
        Route::get('/', [MeetingController::class, 'index'])->middleware('can:meeting-index');
        Route::get('/{meeting_id}', [MeetingController::class, 'show'])->middleware('can:meeting-detail');
        Route::post('/', [MeetingController::class, 'store'])->middleware('can:meeting-add');
        Route::put('/{meeting_id}', [MeetingController::class, 'update'])->middleware('can:meeting-edit');
        Route::delete('/{meeting_id}', [MeetingController::class, 'destroy'])->middleware('can:meeting-delete');

        Route::put('/{meeting_id}/edit_member', [MeetingController::class, 'editMember'])->middleware('can:meeting-edit');
        Route::put('/{meeting_id}/delete_member', [MeetingController::class, 'deleteMember'])->middleware('can:meeting-edit');
        Route::get('/{meeting_id}/export/{extension}', [MeetingController::class, 'export'])->middleware('can:meeting-report');
        Route::put('/{meeting_id}/update_note', [MeetingController::class, 'updateNote']);
        Route::post('/upload_note_image', [MeetingController::class, 'uploadNoteImage']);
    });

    Route::prefix('unit')->group(function () {
        Route::post('/', [UnitController::class, 'store'])->middleware('can:unit-index');
        Route::put('/{unit_id}', [UnitController::class, 'update'])->middleware('can:unit-edit');
        Route::delete('/{unit_id}', [UnitController::class, 'destroy'])->middleware('can:unit-delete');

        Route::put('/{title_id}/delete_member', [UnitController::class, 'deleteMmember'])->middleware('can:unit-delete');
        Route::put('/{title_id}/add_member', [UnitController::class, 'addMember'])->middleware('can:unit-add');
    });
});
