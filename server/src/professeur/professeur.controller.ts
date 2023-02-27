import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfesseurService } from './professeur.service';
import { professeurInterface } from './entities/professeur.interface';

@Controller('professeur')
export class ProfesseurController {
  constructor(private readonly professeurService: ProfesseurService) {}

  @Post('create')
  create(@Body() createProfesseurDto: professeurInterface) {
    return this.professeurService.create(createProfesseurDto);
  }

  @Get()
  findAll() {
    return this.professeurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professeurService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateProfesseurDto: professeurInterface,
  // ) {
  //   return this.professeurService.update(+id, updateProfesseurDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professeurService.remove(id);
  }
}
