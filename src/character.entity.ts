import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { Quote } from './quote.entity';

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @OneToMany(() => Quote, quote => quote.character)
    // quotes: Quote[];
}