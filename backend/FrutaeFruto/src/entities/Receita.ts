import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Passo } from '../interfaces/IReceita';

@Entity('receitas')
export class Receita {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column('simple-json')
    passo: Passo[];

    @Column()
    imagemUrl: string;
}