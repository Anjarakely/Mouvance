import { Injectable } from '@nestjs/common';
import { classe_etudeInterface } from './entities/classe_etude.interface';
import { DeepPartial, Repository } from 'typeorm';
import { ClasseEtude } from './entities/classe_etude.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClasseEtudeService {
  constructor(
    @InjectRepository(ClasseEtude)
    private readonly classRepos: Repository<ClasseEtude>,
  ) {}

  create(createClasseEtude: classe_etudeInterface) {
    return this.classRepos.save(createClasseEtude as DeepPartial<ClasseEtude>);
  }

  findAll() {
    return this.classRepos.find();
  }

  findOne(id: string) {
    return this.classRepos.find({
      where: {
        idClasseEtude: id,
      },
    });
  }

  update(id: string, updateClasseEtudeDto: classe_etudeInterface) {
    this.findOne(id);
    return this.classRepos.save(
      updateClasseEtudeDto as DeepPartial<ClasseEtude>,
    );
  }

  remove(id: string) {
    return this.classRepos.delete(id);
  }
}
