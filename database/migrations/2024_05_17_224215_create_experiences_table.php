<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable(true);
            $table->date('begin')->nullable(true);
            $table->date('end')->nullable(true);
            $table->string('location')->nullable(true);
            $table->string('formation')->nullable(true);
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('resume_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade');
            $table->foreign('resume_id')->references('id')->on('resumes')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};
