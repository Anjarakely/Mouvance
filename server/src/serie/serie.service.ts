import { Injectable } from '@nestjs/common';
import { serieInterface } from './entities/serie.interface';
import { DeepPartial, Repository } from 'typeorm';
import { Serie } from './entities/serie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(Serie)
    private readonly serieRepos: Repository<Serie>,
  ) {}

  create(createSerie: serieInterface) {
    return this.serieRepos.save(createSerie as DeepPartial<Serie>);
  }

  findAll() {
    return this.serieRepos.find();
  }

  findOne(id: string) {
    return this.serieRepos.find({
      where: {
        idSerie: id,
      },
    });
  }

  // update(id: number, updateSerieDto: serieInterface) {
  //   return `This action updates a #${id} serie`;
  // }

  remove(id: string) {
    return this.serieRepos.delete(id);
  }
}
