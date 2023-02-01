import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repoMockFactory } from '../test/helpers';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Character } from './character/character.entity';
import { CharacterService } from './character/character.service';
import { Quote } from './quote/quote.entity';
import { QuoteService } from './quote/quote.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        CharacterService,
        QuoteService,
        { provide: getRepositoryToken(Character), useFactory: repoMockFactory },
        { provide: getRepositoryToken(Quote), useFactory: repoMockFactory },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
