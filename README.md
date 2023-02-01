# Random Quote Generator

## Running Andrew Harris's project
#### Notes: 
This was developed on Windows 11 in WSL Ubuntu 20.04.5 with Node v18 using VS Code and Postman.

All endpoints are in the `AppController`. The main endpoint for getting a random quote is `/quote/random`. Other endpoints were added to test the database functionality.

Ideally if I had more time, I would like to spend additional time making the API truly restful, i.e. providing more endpoints for obtaining quotes by a specific character, quotes and characters by id, etc. Also perhaps nesting quotes under character based on the parent-child relationship, e.g. `/character/{id}/quote/{id}`.

I would also spend more time improving the test coverage, however I spent most of my testing time understanding how to mock the repository dependencies and building the database seeder.

1. A Postman collection has been provided [here](./postman/).
1. I used yarn cli (v1) since I saw a yarn.lock file: `npm i -g yarn`
1. Installing dependencies is needed: `yarn`
1. Run the app: `yarn start`
1. Test the app: 
    ```
      yarn test
      yarn test:e2e
      yarn test:cov
    ```
1. It should not be necessary, but if you desire to re-seed the database, you can delete the `random-quote-db.sqlite3`
file, then run `yarn test:e2e`. The `quote.e2e.spec` file contains a test that checks
if the quote table is empty, and if so, adds the data from `office_quotes.json`. You might see an error about the database being locked, the queries should still run. To avoid the error, you can run `yarn start` first to make sure the database is properly initialized before seeding.

## END Running Andrew Harris's project

## Introduction

Your task is to build a backend application that acts as a RESTful API Server for displaying random quotes. 

The application should be written using [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/), [TypeORM](https://typeorm.io), and [SQLite](https://www.sqlite.org)

## Getting Started

The NestJS starter code and [quotes file](https://github.com/VioletLabsInc/random-quote-generator/blob/master/src/data/office_quotes.json) can be found in our random-quote-generator GitHub repository. 
The [NestJS First Steps](https://docs.nestjs.com/first-steps) documents are a great launching point to begin building this.

## What We Expect From You
1. Create an application that creates and uses a RESTful API to retrieve and display a random quote from the given [office-quotes](https://github.com/VioletLabsInc/random-quote-generator/blob/master/src/data/office_quotes.json) dataset. This application does not need to be deployed or hosted anywhere- just something you can run locally.
2. Add tests to your newly created application.
3. Add any additional feature of your choice.
4. Update the README with any information you want to include that will help us understand and run your project.
5. Upload your completed code to your own Git repository and share it with us.

## Need Help?

Feel free to consult any NestJS or TypeScript documentation as necessary. For any other further questions or issues that arise, reach out to your hiring manager.

## Time Estimate

We expect this to take you 1-2 hours to complete. This isn’t a hard limit- it is just for you to plan your time!

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
