<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('unit_id')->nullable();
            $table->unsignedBigInteger('title_id')->nullable();
            $table->string('rfid')->nullable()->unique();
            $table->integer('no_anggota')->unique()->nullable(); // Format : date('y) + 4 digit autoincrements
            $table->string('nopeg', 8)->unique();
            $table->enum('is_active', ['y', 'n'])->default('y');
            $table->enum('is_approved', ['y', 'n'])->defalt('y');
            $table->enum('is_kpk', ['y', 'n'])->defalt('n');
            $table->string('nama');
            $table->string('email')->unique()->nullable();
            $table->string('phone')->unique()->nullable();
            $table->date('tanggal_daftar')->nullable();
            $table->date('tanggal_lahir')->nullable();
            $table->string('tempat_lahir')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('title_id')->references('id')->on('titles')->onDelete('set null');
            $table->foreign('unit_id')->references('id')->on('units')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
    }
}
