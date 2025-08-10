<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;


class BaseAuthenticatable extends Authenticatable {

    protected static function boot()
    {
        parent::boot();

        static::creating(function($model) {
            if(empty($model->id)) {
                $model->id = Str::uuid();
            }
        });
    }
}
