import { Niveau } from 'src/niveau/entities/niveau.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Filiere {
  @PrimaryColumn()
  idFil: string;

  @Column()
  nameFil: string;

  @ManyToMany(() => Niveau)
  @JoinTable()
  niveaux: Niveau[];
}
