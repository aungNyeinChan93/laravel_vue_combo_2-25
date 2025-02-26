<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\LoginResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\RegisterResource;

class AuthController extends Controller
{
    //register
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'email|unique:users,email',
            "password" => 'required|confirmed|max:255',
        ]);

        $user = User::create($fields);

        return response()->json([
            'message' => 'success',
            'data' => new RegisterResource($user),
        ], 201);

    }

    // login
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!Hash::check($fields['password'], $user->password)) {
            return response()->json([
                'message' => 'Your provided crenditial are not correct!',
            ], 403);
        }
        return response()->json([
            'message' => 'success',
            "data" => new LoginResource($user)
        ]);
    }

    // logout
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'success',
        ]);
    }
}
