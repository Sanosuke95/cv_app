<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreResumeRequest;
use App\Http\Requests\UpdateResumeRequest;
use App\Models\Resume;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class ResumeController extends Controller
{
    /**
     * get current user
     * 
     * @var object
     */
    protected $user;

    public function __construct()
    {
        $this->user = Auth::user();
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $resumes = Resume::all()->where('user_id', '=', $this->user['id']);
        return response()->json($resumes, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreResumeRequest $request)
    {
        try {
            $validated = $request->all();
            $validated['user_id'] = $this->user['id'];
            Resume::create($validated);
            return response()->json(['message' => 'resume create'], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation error', 'message' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Server error', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume)
    {
        return response()->json($resume);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResumeRequest $request, Resume $resume)
    {
        try {
            $validated = $request->all();
            $resume->update($validated);
            return response()->json(['message' => 'resume update'], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation error', 'message' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Server error', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resume $resume)
    {
        $resume->delete();
        return response()->json(['message' => 'resume delete']);
    }
}
