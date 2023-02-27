import { Module } from '@nestjs/common';
import { ClasseEtudeService } from './classe_etude.service';
import { ClasseEtudeController } from './classe_etude.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClasseEtude } from './entities/classe_etude.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClasseEtude])],
  controllers: [ClasseEtudeController],
  providers: [ClasseEtudeService],
})
export class ClasseEtudeModule {}
