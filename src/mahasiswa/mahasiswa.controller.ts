/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import { UseGuards, UseInterceptors, Post, Body, Get, Param, ParseIntPipe, Patch, Delete, Controller } from "@nestjs/common";
import { CreateMahasiswaDto } from "./dto/create-mahasiswa.dto";
import { UpdateMahasiswaDto } from "./dto/update-mahasiswa.dto";
import { MahasiswaService } from "./mahasiswa.service";
import { AuthGuard } from '../guards/auth.guard';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { TransformResponseInterceptor } from '../interceptors/transform-response.interceptor';

@Controller('mahasiswa')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor, TransformResponseInterceptor)
export class MahasiswaController {
  constructor(private readonly mahasiswaService: MahasiswaService) {}

  @Post()
  create(@Body() createMahasiswaDto: CreateMahasiswaDto) {
    return this.mahasiswaService.create(createMahasiswaDto);
  }

  @Get()
  findAll() {
    return this.mahasiswaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mahasiswaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMahasiswaDto: UpdateMahasiswaDto,
  ) {
    return this.mahasiswaService.update(id, updateMahasiswaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mahasiswaService.remove(id);
  }
}