import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { Character } from './character.entity';
import { Quote } from './quote/quote.entity';
import { QuoteModule } from './quote/quote.module';
import { QuoteService } from './quote/quote.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database: 'random-quote-db.sqlite3',
      entities: [
        // Character,
        Quote,
      ],
      synchronize: true,
    }),
    QuoteModule
  ],
  controllers: [AppController],
  providers: [AppService, QuoteService],
})
export class AppModule {}
