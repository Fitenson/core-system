<?php

namespace App\Http\Requests\User;


use Illuminate\Foundation\Http\FormRequest;


class UpdateUserRequest extends FormRequest {
    public function rules() {
        return [
            'name' => 'required|string|max:255',
            'full_name' => 'nullable|string|max:100',
            'email' => 'nullable|email',
            'nric' => 'nullable|string|max:100',
            'description' => 'nullable|string|max:500',
            'address' => 'nullable|string|max:500',
        ];
    }


    public function messages()
    {
        return [
            'name.required' => 'The name field is required.',
            'name.max' => 'The name may not be greater than 255 characters.',

            'full_name.max' => 'The full name may not be greater than 100 characters.',

            'email.required' => 'The email field is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email is already taken.',

            'description.max' => 'The description may not be greater than 500 characters.',

            'nric.max' => 'The nric may not be greater than 100 characters.',

            'address.max' => 'The address may not be greater than 500 characters.',
        ];
    }
}
