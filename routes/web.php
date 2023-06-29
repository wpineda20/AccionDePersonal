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
use App\Http\Controllers\RemarkController;
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


Route::group(['middleware' => ['auth', 'verified', 'log', 'throttle:web']], function () {
    Route::get('/web/user/actualUser', [UserController::class, 'actualUser']);
    Route::get('/web/personnelAction/latest', [PersonnelActionController::class, 'latestPersonnelActions']);
    Route::get('/web/personnelAction/byJustifications', [PersonnelActionController::class, 'personnelActionsByJustifications']);
    Route::get('/web/personnelAction/total', [PersonnelActionController::class, 'totalPersonnelActionByStatus']);
    Route::get('/web/justificationType/colors', [JustificationTypeController::class, 'justificationLettersColors']);

    Route::group(['middleware' => ['has.role:Administrador']], function () {
        // Apis
        Route::resource('/web/department', DepartmentController::class);
        Route::resource('/web/municipality', MunicipalityController::class);
        Route::resource('/web/user', UserController::class);
        Route::resource('/web/role', RoleController::class);
        Route::resource('/web/justificationType', JustificationTypeController::class);
        Route::delete('/web/justificationType', [JustificationTypeController::class, 'destroy']);
        Route::resource('/web/dependency', DependencyController::class);
        Route::delete('/web/dependency', [DependencyController::class, 'destroy']);
        Route::resource('/web/status', StatusController::class);
        Route::delete('/web/status', [StatusController::class, 'destroy']);
        Route::resource('/web/remark', RemarkController::class);
        Route::delete('/web/remark', [RemarkController::class, 'destroy']);
        // Route::resource('/web/personnelAction', PersonnelActionController::class);

        Route::post('/web/personnelAction/updateStatus', [PersonnelActionController::class, 'updateStatus']);
        Route::post('/web/remark/verifyRemark', [RemarkController::class, 'verifyRemark']);
        Route::post('/web/user/usersByDependency', [UserController::class, 'usersByDependency']);
        Route::get('personnelAction/userPersonnelActions', [PersonnelActionController::class, 'userPersonnelActions']);
        Route::post('/web/personnelAction/verifyPersonnelActions', [PersonnelActionController::class, 'verifyPersonnelActions']);

        // Views
        Route::get('/departments', fn () => view('department.index'));
        Route::get('/municipalities', fn () => view('municipality.index'));
        Route::get('/users', fn () => view('user.index'));
        Route::get('/justificationTypes', fn () => view('justification_type.index'));
        Route::get('/dependencies', fn () => view('dependency.index'));
        Route::get('/status', fn () => view('status.index'));
        Route::get('/userPersonnelActions', fn () => view('user_personnel_actions.index'));
        Route::get('/verifyPersonnelActions', fn () => view('verify_personnel_actions.index'));
        Route::get('/processPersonnelActions', fn () => view('process_personnel_actions.index'));
    });

    Route::group(['middleware' => ['has.role:Administrador,Jefe,Coordinador,RRHH']], function () {
        Route::post('/web/personnelAction/updateStatus', [PersonnelActionController::class, 'updateStatus']);
        Route::post('/web/personnelAction/verifyPersonnelActions', [PersonnelActionController::class, 'verifyPersonnelActions']);

        // Views
        Route::get('/verifyPersonnelActions', fn () => view('verify_personnel_actions.index'));
        // Route::resource('/web/personnelAction', PersonnelActionController::class);
    });

    Route::get('/', fn () => view('home'));
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/web/justificationType', [JustificationTypeController::class, 'index']);
    Route::post('/web/personnelAction', [PersonnelActionController::class, 'store']);
    Route::get('/web/personnelAction', [PersonnelActionController::class, 'index']);
    Route::put('/web/personnelAction/{id}', [PersonnelActionController::class, 'update']);
    Route::get('/personnelAction', fn () => view('personnel_action.index'));
    Route::get('/userPersonnelActions', fn () => view('user_personnel_actions.index'));
});

Auth::routes(['verify' => true, 'login' => true, 'reset' => true, 'register' => true, 'remember_me' => false]);
Route::get('/redirectToProvider', [LoginSvController::class, 'redirectToProvider']);
Route::get('/callback', [LoginSvController::class, 'handleProviderCallback']);
