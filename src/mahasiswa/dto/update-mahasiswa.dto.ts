/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsOptional, IsString } from "class-validator";
import { CreateMahasiswaDto } from "./create-mahasiswa.dto";

export class UpdateMahasiswaDto extends PartialType(CreateMahasiswaDto) {
    @IsOptional()
    @IsString({ message: 'Nama harus dalam bentuk string' })
    nama?: string;
  
    @IsOptional()
    @IsEmail({}, { message: 'Format email anda tidak valid' })
    email?: string;
  
    @IsOptional()
    @IsString({ message: 'Jurusan harus dalam bentuk string' })
    jurusan?: string;
  
    @IsOptional()
    @IsString({ message: 'Fakultas harus dalam bentuk string' })
    fakultas?: string;
  }