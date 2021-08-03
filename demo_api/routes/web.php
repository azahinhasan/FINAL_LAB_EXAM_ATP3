<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});
//Route::get('/info', 'UserController@infoList');

Route::get('/info', 'UserController@infoList');
Route::post('/info', 'UserController@insert');
//

Route::get('/info/{id}', 'UserController@infoWithID');

Route::post('/info/{id}', 'UserController@update');

Route::delete('/info/{id}', 'UserController@delete');