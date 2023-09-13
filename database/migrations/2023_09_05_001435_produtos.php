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
        Schema::create('produtos', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->string('fabricante');
            $table->string('nome');
            $table->string('descricao');
            $table->foreignId('categoria');
            $table->foreignId('fornecedor');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('produtos');
    }
};
