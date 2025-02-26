<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\LoginResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\RegisterResource;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //register
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'email|unique:users,email',
            "password" => 'required|confirmed|max:255',
        ]);

        if ($validator->fails()) {
            $formattedErrors = collect($validator->errors())
                ->map(fn($messages) => $messages[0])
                ->toArray();
            return response()->json(['errors' => $formattedErrors], 422);
        }

        $user = User::create($validator->validated());

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
        // $request->user()->tokens()->delete();
        // Delete only the current token (user login token)
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'success',
        ]);
    }
}
