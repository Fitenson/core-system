<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\User\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function index(Request $request) {
        $per_page = $request->query('per_page', 10);

        $users = User::orderBy('created_at', 'desc')
        ->paginate($per_page)
        ->withQueryString();

        return Inertia::render('user/index', [
            'paginator' => $users
        ]);
    }


    public function create()
    {
        return Inertia::render('user/form-view');
    }


    public function store(CreateUserRequest $create_user_request)
    {
        $user = new User;
        $user->fill($create_user_request->validated());

        $default_password = '88888888';

        $user->password = Hash::make($default_password);
        $user->save();

        return redirect()->route('user.show', $user->id);
    }


    public function show($id)
    {
        $user = User::findOrFail($id);

        return Inertia::render('user/form-view', [
            'userData' => $user
        ]);
    }


    public function update(UpdateUserRequest $update_user_request, $id)
    {
        $user = User::findOrFail($id);
        $user->fill($update_user_request->validated());
        $user->save();

        return redirect()->route('user.show', $user->id);
    }
}
