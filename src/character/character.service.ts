import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './character.entity';

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(Character)
        private readonly charRepository: Repository<Character>
      ) {}
    
      getCharacters(): Promise<Character[]> {
        return this.charRepository.find();
      }
    
      createCharacter({ name }: { name: string }): Character {
        const newChar = this.charRepository.create({ name });
    
        this.charRepository.save([newChar]);
    
        return newChar;
      }
}
