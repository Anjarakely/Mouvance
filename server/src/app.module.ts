import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtudiantModule } from './etudiant/etudiant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etudiant } from './etudiant/entities/etudiant.entity';
import { ProfesseurModule } from './professeur/professeur.module';
import { Professeur } from './professeur/entities/professeur.entity';
import { FilieresModule } from './filieres/filieres.module';
import { Filiere } from './filieres/entities/filiere.entity';
import { SerieModule } from './serie/serie.module';
import { NiveauModule } from './niveau/niveau.module';
import { ClasseEtudeModule } from './classe_etude/classe_etude.module';
import { Serie } from './serie/entities/serie.entity';
import { Niveau } from './niveau/entities/niveau.entity';
import { ClasseEtude } from './classe_etude/entities/classe_etude.entity';
import { EtudiantService } from './etudiant/etudiant.service';
import { ProfesseurService } from './professeur/professeur.service';

@Module({
  imports: [
    EtudiantModule,
    ProfesseurModule,
    FilieresModule,
    SerieModule,
    NiveauModule,
    ClasseEtudeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456789',
      database: 'hui',
      entities: [Etudiant, Professeur, Filiere, Serie, Niveau, ClasseEtude],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
