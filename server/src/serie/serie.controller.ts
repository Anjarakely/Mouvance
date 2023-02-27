import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SerieService } from './serie.service';
import { serieInterface } from './entities/serie.interface';

@Controller('serie')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Post()
  create(@Body() createSerieDto: serieInterface) {
    return this.serieService.create(createSerieDto);
  }

  @Get()
  findAll() {
    return this.serieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serieService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSerieDto: serieInterface) {
  //   return this.serieService.update(+id, updateSerieDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serieService.remove(id);
  }
}
