import { Niveau } from 'src/niveau/entities/niveau.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Serie {
  @PrimaryColumn()
  idSerie: string;

  @Column({ nullable: false })
  nomSerie: string;

  @ManyToMany(() => Niveau)
  @JoinTable()
  niveau: Niveau[];
}
