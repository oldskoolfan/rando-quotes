import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quote.entity';
import { QuoteService } from './quote.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quote])
  ],
  providers: [QuoteService],
  exports: [TypeOrmModule]
})
export class QuoteModule {}
