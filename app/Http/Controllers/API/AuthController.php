<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Carbon\Carbon;
use DateTime;
use DateTimeImmutable;
use DateTimeInterface;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->all();

        if (Auth::attempt($credentials)) {
            /**
             * @var  \App\Models\User $user
             * */
            $user = Auth::user();
            $date = new DateTime();
            $token = $user->createToken(
                'authToken',
                ['*'],
                $date->modify(' +1 day')
            )->accessToken;
            Log::info($token);

            return response()->json([
                'token' => $token['token'],
                'expire_at' => $token['expires_at']
            ], 200);
        }

        return response()->json(['message' => 'invalid credentials'], 401);
    }

    public function register(RegisterRequest $request)
    {
        Log::info('Voici un test des logs');
        try {
            $validated = $request->all();

            Log::warning($validated['name']);
            Log::notice($validated['name']);
            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => Hash::make($validated['password']),
                'firstname' => $validated['firstname'],
                'lastname' => $validated['lastname'],
                'active' => $validated['active']
            ]);

            Log::info('Info de l\'utilisateur : ' . $user);

            return response()->json([
                'user' => $user,
                'message' => 'User create'
            ], 200);
        } catch (ValidationException $e) {
            Log::info('Voici un test des logs pour une erreur de 422');
            return response()->json(['error' => 'Validation error', 'message' => $e->errors()], 422);
        } catch (Exception $e) {
            Log::info('Voici un test des logs pour une erreur de type 500');
            return response()->json(['error' => 'Server error', 'message' => $e->getMessage()], 500);
        }
    }

    public function profile(Request $request)
    {

        return $request->user();
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response(['message' => 'logged out'], 200);
    }

    public function delete(Request $request)
    {
        $request->user()->delete();
        $request->user()->currentAccessToken()->delete();
        return response(['message' => 'This user has been destroy'], 200);
    }

    public function checkLogged(Request $request)
    {
        return $request->user();
    }
}
