import { ClasseEtude } from 'src/classe_etude/entities/classe_etude.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Etudiant {
  @PrimaryGeneratedColumn()
  idEt: number;

  @Column({ nullable: false })
  nomEt: string;

  @Column()
  prenomEt: string;

  @Column()
  mailEt: string;

  @Column()
  passwordEt: string;

  @ManyToOne(() => ClasseEtude, (classeEtd) => classeEtd.etd)
  classeEtude: ClasseEtude;
}
