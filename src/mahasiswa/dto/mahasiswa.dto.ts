/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMahasiswaDto{
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    nama: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    jurusan: string;

    @IsString()
    @IsNotEmpty()
    fakultas: string;
}