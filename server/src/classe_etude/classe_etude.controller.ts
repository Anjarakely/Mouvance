import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ClasseEtudeService } from './classe_etude.service';
import { classe_etudeInterface } from './entities/classe_etude.interface';

@Controller('classe-etude')
export class ClasseEtudeController {
  constructor(private readonly classeEtudeService: ClasseEtudeService) {}

  @Post()
  create(@Body() createClasseEtudeDto: classe_etudeInterface) {
    return this.classeEtudeService.create(createClasseEtudeDto);
  }

  @Get()
  findAll() {
    return this.classeEtudeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classeEtudeService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateClasseEtudeDto: classe_etudeInterface,
  // ) {
  //   return this.classeEtudeService.update(id, updateClasseEtudeDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classeEtudeService.remove(id);
  }
}
