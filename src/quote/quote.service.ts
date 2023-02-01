import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from 'src/character/character.entity';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private readonly quoteRepository: Repository<Quote>,
    @InjectRepository(Character)
    private readonly charRepository: Repository<Quote>
  ) {}

  getRandomQuote(): Promise<Quote[]> {
    return this.quoteRepository.find();
  }

  async createQuote({ characterId, quoteText }: { characterId: number, quoteText: string }): Promise<Quote> {
    const character = await this.charRepository.findOneBy({ id: characterId });
    const newQuote = this.quoteRepository.create({
      quote: quoteText,
      character,
    });

    this.quoteRepository.save([newQuote]);

    return newQuote;
  }
}
