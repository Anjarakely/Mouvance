import { Injectable } from '@nestjs/common';
import { filiereInterface } from './entities/filiere.interface';
import { Repository } from 'typeorm';
import { Filiere } from './entities/filiere.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FilieresService {
  constructor(
    @InjectRepository(Filiere)
    private readonly FiliereRepos: Repository<Filiere>,
  ) {}

  create(createFiliere: filiereInterface) {
    return this.FiliereRepos.save(createFiliere);
  }

  findAll() {
    return this.FiliereRepos.find();
  }

  findOne(id: string) {
    return this.FiliereRepos.find({
      where: {
        idFil: id,
      },
    });
  }

  // update(id: number, updateFiliereDto: filiereInterface) {
  //   return `This action updates a #${id} filiere`;
  // }

  remove(id: number) {
    return this.FiliereRepos.delete(id);
  }
}
