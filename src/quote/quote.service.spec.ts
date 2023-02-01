import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Character } from '../character/character.entity';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';
import { QuoteService } from './quote.service';
import { MockType, repoMockFactory } from '../../test/helpers';

describe('QuoteService', () => {
  let service: QuoteService;
  let quoteRepoMock: MockType<Repository<Quote>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuoteService,
        { provide: getRepositoryToken(Quote), useFactory: repoMockFactory },
        { provide: getRepositoryToken(Character), useFactory: repoMockFactory },
      ],
    }).compile();

    service = module.get<QuoteService>(QuoteService);
    quoteRepoMock = module.get(getRepositoryToken(Quote));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getQuotes', () => {
    it('should return a list of quotes', () => {
      // arrange
      quoteRepoMock.find.mockReturnValue([{id: 1, quote: "foo bar"}]);

      // act
      const actual = service.getQuotes();

      // assert
      expect(actual).toEqual([{id: 1, quote: "foo bar"}]);
      expect(quoteRepoMock.find).toHaveBeenCalledTimes(1);
    });
  })

  describe('getRandomQuote', () => {
    it('should return a list of quotes', async () => {
      // arrange
      quoteRepoMock.count.mockReturnValue(10);
      quoteRepoMock.findOne.mockReturnValue({id: 1, quote: "foo bar"});

      // act
      const actual = await service.getRandomQuote();
      const [{ where: { id } }] = quoteRepoMock.findOne.mock.lastCall;

      // assert
      expect(actual).toEqual({id: 1, quote: "foo bar"});
      expect(id).toBeGreaterThanOrEqual(1);
      expect(id).toBeLessThanOrEqual(10);
    });
  })
});
