import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('imagens')
export class ImagemEntity {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column("varchar",{length:100})
    url:string
}