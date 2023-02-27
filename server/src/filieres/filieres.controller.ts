import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FilieresService } from './filieres.service';
import { filiereInterface } from './entities/filiere.interface';

@Controller('filieres')
export class FilieresController {
  constructor(private readonly filieresService: FilieresService) {}

  @Post()
  create(@Body() createFiliereDto: filiereInterface) {
    return this.filieresService.create(createFiliereDto);
  }

  @Get()
  findAll() {
    return this.filieresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filieresService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFiliereDto: filiereInterface) {
  //   return this.filieresService.update(+id, updateFiliereDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filieresService.remove(+id);
  }
}
