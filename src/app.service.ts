import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Quote } from './quote.entity';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
}
