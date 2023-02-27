import { ClasseEtude } from 'src/classe_etude/entities/classe_etude.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Professeur {
  @PrimaryColumn()
  idPro: string;

  @Column()
  namePro: string;

  @Column()
  lastnamePros: string;

  @Column()
  mailPro: string;

  @Column()
  passwordPro: string;

  @ManyToOne(() => ClasseEtude, (classeEtd) => classeEtd.prof)
  classeEtd: ClasseEtude;
}
