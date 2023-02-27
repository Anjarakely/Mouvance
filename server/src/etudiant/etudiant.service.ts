import { Injectable } from '@nestjs/common';
import { EtudiantInterface } from './entities/etudiant.interface';
import { DeepPartial, Repository } from 'typeorm';
import { Etudiant } from './entities/etudiant.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EtudiantService {
  constructor(
    @InjectRepository(Etudiant)
    private readonly etudiantRepos: Repository<Etudiant>,
  ) {}

  create(createEtudiant: EtudiantInterface) {
    return this.etudiantRepos.save(createEtudiant as DeepPartial<Etudiant>);
  }

  findAll() {
    return this.etudiantRepos.find();
  }

  findOne(id: number) {
    return this.etudiantRepos.find({
      where: {
        idEt: id,
      },
    });
  }

  // update(id: number, updateEtudiantDto: UpdateEtudiantDto) {
  //   return `This action updates a #${id} etudiant`;
  // }

  remove(id: number) {
    return this.etudiantRepos.delete(id);
  }
}
