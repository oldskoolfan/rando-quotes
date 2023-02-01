import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CharacterService } from './character/character.service';
// import { Quote } from './quote.entity';
import { QuoteService } from './quote/quote.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly charService: CharacterService,
    private readonly quoteService: QuoteService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/quote")
  getRandomQuote() {
    return this.quoteService.getRandomQuote();
  }

  @Post("/quote")
  saveQuote(@Body() createQuote: { characterId: number, quoteText: string }) {
    return this.quoteService.createQuote(createQuote);
  }

  @Get("/character")
  getCharacters() {
    return this.charService.getCharacters();
  }

  @Post("/character")
  saveCharacter(@Body() createChar: { name: string }) {
    return this.charService.createCharacter(createChar);
  }
}
