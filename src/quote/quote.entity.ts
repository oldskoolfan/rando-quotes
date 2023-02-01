import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Character } from 'src/character/character.entity';

@Entity()
export class Quote {
    @PrimaryColumn()
    id: number;

    @Column()
    quote: string;

    @ManyToOne(() => Character, char => char.quotes)
    character: Character;
}