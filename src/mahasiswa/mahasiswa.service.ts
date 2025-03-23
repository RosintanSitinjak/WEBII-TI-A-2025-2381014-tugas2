/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { Mahasiswa } from "./mahasiswa.entity";
import { CreateMahasiswaDto } from "./dto/create-mahasiswa.dto";
import { UpdateMahasiswaDto } from "./dto/update-mahasiswa.dto";

@Injectable()
export class MahasiswaService {
  private mahasiswas: Mahasiswa[] = [
    {
      id: 1,
      nama: 'Intan',
      email: 'intan@unai.edu',
      jurusan: 'Teknik Informatika',
      fakultas: 'Teknologi Informasi',
    },
    {
      id: 2,
      nama: 'Valen',
      email: 'valen@unai.edu',
      jurusan: 'Sistem Informasi',
      fakultas: 'Teknologi Informasi',
    },
  ];
  private idCounter = 3; // Setelah 2 data inisial

  findAll(): Mahasiswa[] {
    return this.mahasiswas;
  }

  findOne(id: number): Mahasiswa {
    const mahasiswa = this.mahasiswas.find(mhs => mhs.id === id);
    if (!mahasiswa) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak dapat ditemukan`);
    }
    return mahasiswa;
  }

  // create(createMahasiswaDto: CreateMahasiswaDto): Mahasiswa {
  //   const newMahasiswa = {
  //     id: this.idCounter++,
  //     ...createMahasiswaDto,
  //   };
  //   this.mahasiswas.push(newMahasiswa);
  //   return newMahasiswa;
  // }

  create(createMahasiswaDto: CreateMahasiswaDto) {
    const newMahasiswa = {
      id: this.idCounter++, // ID otomatis
      nama: createMahasiswaDto.nama,
      email: createMahasiswaDto.email,
      jurusan: createMahasiswaDto.jurusan,
      fakultas: createMahasiswaDto.fakultas
    };
    this.mahasiswas.push(newMahasiswa);
    return newMahasiswa;
  }


  update(id: number, updateMahasiswaDto: UpdateMahasiswaDto): Mahasiswa {
    const mahasiswaIndex = this.mahasiswas.findIndex(mhs => mhs.id === id);
    if (mahasiswaIndex === -1) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak dapat ditemukan`);
    }

    const updatedMahasiswa = {
      ...this.mahasiswas[mahasiswaIndex],
      ...updateMahasiswaDto,
    };

    this.mahasiswas[mahasiswaIndex] = updatedMahasiswa;
    return updatedMahasiswa;
  }

  remove(id: number): void {
    const mahasiswaIndex = this.mahasiswas.findIndex(mhs => mhs.id === id);
    if (mahasiswaIndex === -1) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak dapat ditemukan`);
    }
    this.mahasiswas.splice(mahasiswaIndex, 1);
  }
}
