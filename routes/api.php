<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ContactController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::apiResource('/contact', ContactController::class)->only(['store', 'index', 'show', 'destroy']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
