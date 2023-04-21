<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\MunicipalityController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\ExcelController;
use App\Http\Controllers\JustificationTypeController;
use App\Http\Controllers\DependencyController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\PersonnelActionController;
use App\Http\Controllers\LoginSvController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes(['verify' => true, 'remember_me' => false]);

//Api User Logged In
Route::get('/api/web/user/infoUserLoggedIn', [UserController::class, 'infoUserLoggedIn']);

Route::group(['middleware' => ['auth', 'verified', 'log', 'throttle:web']], function () {
    Route::group(['middleware' => ['has.role:Administrador']], function () {
        // Apis
        Route::resource('/api/web/department', DepartmentController::class);
        Route::resource('/api/web/municipality', MunicipalityController::class);
        Route::resource('/api/web/user', UserController::class);
        Route::resource('/api/web/role', RoleController::class);
        Route::resource('/api/web/justificationType', JustificationTypeController::class);
        Route::delete('/api/web/justificationType', [JustificationTypeController::class, 'destroy']);
        Route::resource('/api/web/dependency', DependencyController::class);
        Route::delete('/api/web/dependency', [DependencyController::class, 'destroy']);
        Route::resource('/api/web/status', StatusController::class);
        Route::delete('/api/web/status', [StatusController::class, 'destroy']);
        Route::resource('/api/web/personnelAction', PersonnelActionController::class);

        // Views
        Route::get('/departments', function () {
            return view('department.index');
        });

        Route::get('/municipalities', function () {
            return view('municipality.index');
        });

        Route::get('/users', function () {
            return view('user.index');
        });

        Route::get('/justificationTypes', function () {
            return view('justification_type.index');
        });

        Route::get('/dependencies', function () {
            return view('dependency.index');
        });

        Route::get('/status', function () {
            return view('status.index');
        });

        Route::get('/personnelAction', function () {
            return view('personnel_action.index');
        });
    });


    Route::group(['middleware' => ['has.role:Administrador']], function () {
    });

    //Reports
    Route::get('generate-pdf', [PDFController::class, 'generatePDF']);

    //Excel
    Route::get('export', [ExcelController::class, 'export']);

    Route::get('/home', [HomeController::class, 'index'])->name('home');
});

Auth::routes(['verify' => true, 'login' => true, 'reset' => true, 'register' => true]);

Route::get('/redirectToProvider', [LoginSvController::class, 'redirectToProvider']);
Route::get('/callback', [LoginSvController::class, 'handleProviderCallback']);
