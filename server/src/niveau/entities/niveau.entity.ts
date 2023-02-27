import { ClasseEtude } from 'src/classe_etude/entities/classe_etude.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Niveau {
  @PrimaryColumn()
  idNiveau: string;

  @Column()
  nomNiveau: string;

  @ManyToOne(() => ClasseEtude, (classEtd) => classEtd.niveau)
  classeEtd: ClasseEtude;
}
