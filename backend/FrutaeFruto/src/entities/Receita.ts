import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {Passo} from "../interfaces/IReceita";

@Entity('receitas')
export class Receita {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", {length:100})
    titulo: string;

    @Column("json")
    passo: Passo[];

    @Column("varchar", {length:100})
    imagemUrl: string;
}