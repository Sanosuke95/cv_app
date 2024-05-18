<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'level',
        'user_id',
        'resume_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'foreign_key', 'user_id');
    }

    public function resume(): BelongsTo
    {
        return $this->belongsTo(Resume::class, 'foreign_key', 'resume_id');
    }
}
