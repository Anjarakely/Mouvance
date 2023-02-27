import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantInterface } from './entities/etudiant.interface';

@Controller('etudiant')
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  @Post()
  create(@Body() createEtudiantDto: EtudiantInterface) {
    return this.etudiantService.create(createEtudiantDto);
  }

  @Get()
  findAll() {
    return this.etudiantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.etudiantService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: number) {
  //   return this.etudiantService.update(id);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.etudiantService.remove(id);
  }
}
