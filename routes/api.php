<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\ExperienceController;
use App\Http\Controllers\API\ResumeController;
use App\Http\Controllers\API\SkillController;
use Illuminate\Support\Facades\Route;


Route::apiResource('/contact', ContactController::class)->only(['store', 'index', 'show', 'destroy']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/resumes', ResumeController::class);
    Route::prefix('resumes/{resume:id}')->group(function () {
        Route::apiResource('/skills', SkillController::class);
        Route::apiResource('/experiences', ExperienceController::class);
    })->scopeBindings();
    Route::prefix('user')->group(function () {
        Route::get('profile', [AuthController::class, 'profile']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::delete('delete', [AuthController::class, 'delete']);
    });
});
