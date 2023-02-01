import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

type Quote = {
    quote_id: number;
    quote: string;
    character: string;
};

describe('Random quote (e2e)', () => {
    let app: INestApplication;
    let server: any;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
      
        app = moduleFixture.createNestApplication();
        await app.init();
        server = app.getHttpServer();
    });

    it('should seed the db if necessary', async () => {
        const response = await request(server).get('/quote');

        if (Array.isArray(response.body) && response.body.length > 0) {
            // no seed necessary
            console.debug('no seed necesary');
            expect(true).toBeTruthy();
        } else {
            // seed the database from office_quotes.json
            console.debug('seeding random-quote-db with office_quotes.json');

            const officeQuotes: Quote[] = require('../src/data/office_quotes.json');

            for (const {quote_id: id, quote, character} of officeQuotes) {
                await request(server).post('/quote')
                    .send({
                        quoteId: id,
                        quoteText: quote,
                        character,
                    })
                    .set('Accept', 'application/json');
            }
        }
    })
})