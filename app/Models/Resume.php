<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Resume extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'info',
        'user_id'
    ];

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'foreign_key', 'user_id');
    }
}
