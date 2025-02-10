import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("receitas")
export class ReceitaEntity{
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column("varchar", {nullable:false, length:100})
    titulo:string;

    @Column("varchar", {nullable:false})
    passos:string[];

    @Column("varchar", {nullable:false})
    imagemUrl:string
}