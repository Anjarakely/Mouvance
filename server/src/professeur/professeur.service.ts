import { Injectable } from '@nestjs/common';
import { professeurInterface } from './entities/professeur.interface';
import { DeepPartial, Repository } from 'typeorm';
import { Professeur } from './entities/professeur.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfesseurService {
  constructor(
    @InjectRepository(Professeur)
    private readonly profRepos: Repository<Professeur>,
  ) {}
  create(createProfesseur: professeurInterface) {
    return this.profRepos.save(createProfesseur as DeepPartial<Professeur>);
  }

  findAll() {
    return this.profRepos.find();
  }

  findOne(id: string) {
    return this.profRepos.find({
      where: {
        idPro: id,
      },
    });
  }

  // update(id: number, updateProfesseurDto: professeurInterface) {
  //   return `This action updates a #${id} professeur`;
  // }

  remove(id: string) {
    return this.profRepos.delete(id);
  }
}
