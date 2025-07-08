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
        Schema::create('products', function (Blueprint $table) {
            $table->id(); //Primary Key AUTO_INCREMENT
            $table->string('name'); // CREA UNA COLUMNA VARCHAR CON EL NOMBRE NAME
            $table->float('price');// CREA UNA COLUMNA FLOAT CON EL NOMBRE PRICE
            $table->integer('stock');// CREA UNA COLUMNA INTEGER CON EL NOMBRE STOCK
            $table->timestamps(); // CREATED_AT & UPDATE_AT 2COLUMNAS
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
