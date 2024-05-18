<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreExperienceRequest;
use App\Http\Requests\UpdateExperienceRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Models\Experience;
use App\Models\Resume;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class ExperienceController extends Controller
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
    public function index(Resume $resume)
    {
        $experiences = Experience::all()->where('resume_id', '=', $resume->id);
        return response()->json($experiences, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Resume $resume, StoreExperienceRequest $request)
    {
        try {
            $validated = $request->all();
            $validated['user_id'] = $this->user['id'];
            $validated['resume_id'] = $resume->id;
            $skill = Experience::create($validated);

            return response()->json(['message' => 'experience create', $skill], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation error', 'message' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Server error', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume, Experience $experience)
    {
        return response()->json($experience);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Resume $resume, UpdateExperienceRequest $request, Experience $experience)
    {
        try {
            $validated = $request->all();
            $experience->update($validated);
            return response()->json(['message' => 'experience update'], 200);

        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation error', 'message' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Server error', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resume $resume, Experience $experience)
    {
        $experience->delete();
        return response()->json(['message' => 'experience delete']);
    }
}
