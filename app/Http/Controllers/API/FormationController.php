<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFormationRequest;
use App\Http\Requests\UpdateFormationRequest;
use App\Models\Formation;
use App\Models\Resume;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class FormationController extends Controller
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
        $experiences = Formation::all()->where('resume_id', '=', $resume->id);
        return response()->json($experiences, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Resume $resume, StoreFormationRequest $request)
    {
        try {
            $validated = $request->all();
            $validated['user_id'] = $this->user['id'];
            $validated['resume_id'] = $resume->id;
            $formation = Formation::create($validated);

            return response()->json(['message' => 'formation created', $formation], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation error', 'message' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Server error', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume, Formation $formation)
    {
        return response()->json($formation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Resume $resume, UpdateFormationRequest $request, Formation $formation)
    {
        try {
            $validated = $request->all();
            $formation->update($validated);

            return response()->json(['message' => 'formation updated', $formation], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation error', 'message' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Server error', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resume $resume, Formation $formation)
    {
        $formation->delete();
        return response()->json(['message' => 'formation deleted']);
    }
}
