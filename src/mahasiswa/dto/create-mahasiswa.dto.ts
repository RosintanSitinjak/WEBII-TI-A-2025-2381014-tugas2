/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, IsString, IsInt } from "class-validator";

export class CreateMahasiswaDto {
    @IsInt()
    id?: number;

    @IsNotEmpty({message: 'Nama harus di isi, tidak boleh kosong!'})
    @IsString({message: 'Nama harus dalam bentuk string!'})
    nama: string;

    @IsNotEmpty({ message: 'Email harus di isi, tidak boleh kosong!' })
    @IsEmail({}, { message: 'Format email anda tidak valid!' })
    email: string;

    @IsNotEmpty({ message: 'Jurusan harus di isi, tidak boleh kosong!' })
    @IsString({ message: 'Jurusan harus dalam bentuk string' })
    jurusan: string;

    @IsNotEmpty({ message: 'Fakultas harus di isi, tidak boleh kosong!' })
    @IsString({ message: 'Fakultas harus dalam bentuk string' })
    fakultas: string;
}

