import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NiveauService } from './niveau.service';
import { NiveauInterface } from './entities/niveau.interface';

@Controller('niveau')
export class NiveauController {
  constructor(private readonly niveauService: NiveauService) {}

  @Post()
  create(@Body() createNiveauDto: NiveauInterface) {
    return this.niveauService.create(createNiveauDto);
  }

  @Get()
  findAll() {
    return this.niveauService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.niveauService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNiveauDto: NiveauInterface) {
  //   return this.niveauService.update(+id, updateNiveauDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.niveauService.remove(id);
  }
}
