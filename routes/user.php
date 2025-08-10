<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\User\UserController;


Route::middleware('auth')->prefix('user')->group(function() {
    Route::get('/', [UserController::class, 'index'])->name('user.index');
    Route::get('/create', [UserController::class, 'create'])->name('user.create');
    Route::post('/store', [UserController::class, 'store'])->name('user.store');
    Route::get('/{id}', [UserController::class, 'show'])->name('user.show');
    Route::patch('/update/{id}', [UserController::class, 'update'])->name('user.update');
});
