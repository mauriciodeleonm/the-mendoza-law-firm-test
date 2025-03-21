<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::middleware('api')->group(function () {
    Route::post('/contacts', [ContactController::class, 'store']);
    Route::get('/contacts', [ContactController::class, 'index']);
});
