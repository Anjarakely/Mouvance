import { Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { Niveau } from './entities/niveau.entity';
import { NiveauInterface } from './entities/niveau.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NiveauService {
  constructor(
    @InjectRepository(Niveau)
    private readonly niveauRepos: Repository<Niveau>,
  ) {}
  create(createNiveau: NiveauInterface) {
    return this.niveauRepos.save(createNiveau as DeepPartial<Niveau>);
  }

  findAll() {
    return this.niveauRepos.find();
  }

  findOne(id: string) {
    return this.niveauRepos.find({
      where: {
        idNiveau: id,
      },
    });
  }

  // update(id: number, updateNiveauDto: NiveauInterface) {
  //   return `This action updates a #${id} niveau`;
  // }

  remove(id: string) {
    return this.niveauRepos.delete(id);
  }
}
