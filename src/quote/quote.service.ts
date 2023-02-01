import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private readonly quoteRepository: Repository<Quote>
  ) {}

  getRandomQuote(): Promise<Quote[]> {
    return this.quoteRepository.find();
  }

  createQuote({ quoteText }: { quoteText: string }): Quote {
    const newQuote = this.quoteRepository.create({
      quote: quoteText,
    });

    this.quoteRepository.save([newQuote]);

    return newQuote;
  }
}
