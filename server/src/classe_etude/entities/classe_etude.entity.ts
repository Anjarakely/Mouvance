import { Etudiant } from 'src/etudiant/entities/etudiant.entity';
import { Niveau } from 'src/niveau/entities/niveau.entity';
import { Professeur } from 'src/professeur/entities/professeur.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class ClasseEtude {
  @PrimaryColumn()
  idClasseEtude: string;

  @Column()
  nomClasseEtude: string;

  @OneToMany(() => Etudiant, (etd) => etd.classeEtude)
  etd: Etudiant[];

  @OneToMany(() => Professeur, (pr) => pr.classeEtd)
  prof: Professeur[];

  @OneToMany(() => Niveau, (niv) => niv.classeEtd)
  niveau: Niveau[];
}
