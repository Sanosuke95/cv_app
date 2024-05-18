<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Models\Resume;
use App\Models\Skill;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SkillController extends Controller
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
        $skills = Skill::all()->where('resume_id', '=', $resume->id);
        return response()->json($skills, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Resume $resume, StoreSkillRequest $request)
    {
        try {
            $validated = $request->all();
            $validated['user_id'] = $this->user['id'];
            $validated['resume_id'] = $resume->id;
            if ($validated['level'] == NULL) $validated['level'] = 1;
            $skill = Skill::create($validated);

            return response()->json(['message' => 'skill create', $skill], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation error', 'message' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Server error', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume, Skill $skill)
    {
        return response()->json($skill);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSkillRequest $request, Resume $resume, Skill $skill)
    {
        try {
            $validated = $request->all();
            $skill->update($validated);
            return response()->json(['message' => 'skill update'], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation error', 'message' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Server error', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resume $resume, Skill $skill)
    {
        $skill->delete();
        return response()->json(['message' => 'skill delete']);
    }
}
