import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from '../character/character.entity';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';

export type QuoteDto = {
  character: string;
  quoteId: number;
  quoteText: string;
};

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private readonly quoteRepository: Repository<Quote>,
    @InjectRepository(Character)
    private readonly charRepository: Repository<Character>
  ) {}

  getQuotes(): Promise<Quote[]> {
    return this.quoteRepository.find({
      relations: { character: true },
    });
  }

  async getRandomQuote(): Promise<Quote> {
    const max = await this.quoteRepository.count();
    const id = Math.floor(Math.random() * max);

    console.debug(`[getRandomQuote] searching for id: ${id}`);

    return this.quoteRepository.findOneBy({ id });
  }

  async createQuote({ character: charName, quoteId, quoteText }: QuoteDto): Promise<Quote> {
    let character = await this.charRepository.findOneBy({ name: charName } );

    if (character === null) {
      character = this.charRepository.create({ name: charName });
      await this.charRepository.save([character]);
    }

    const newQuote = this.quoteRepository.create({
      id: quoteId,
      quote: quoteText,
      character,
    });

    await this.quoteRepository.save([newQuote]);

    return Promise.resolve(newQuote);
  }
}
