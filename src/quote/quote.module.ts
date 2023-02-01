import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from '../character/character.entity';
import { Quote } from './quote.entity';
import { QuoteService } from './quote.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quote, Character])
  ],
  providers: [QuoteService],
  exports: [TypeOrmModule],
})
export class QuoteModule {}
