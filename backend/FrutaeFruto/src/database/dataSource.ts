import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Receita } from "../entities/Receita";
import { ReceitaTable1739321101145 } from './migrations/1739325066059-updateReceitaTable';
import { ReceitaSeeders1739323418099 } from './migrations/1739323418099-ReceitaSeeders';
import { ImagemTable1739907889330 } from './migrations/1739907889330-ImagemTable';
import { ImagemEntity } from '../entities/ImagemEntity';
export const AppDataSource = new DataSource({
    type: "mysql",
    host:"localhost",
    username:"root",
    password:"root",
    database:"frutoefruta",
    synchronize: true,
    entities: [Receita, ImagemEntity],
    migrations: [ReceitaTable1739321101145,ReceitaSeeders1739323418099,ImagemTable1739907889330],
    subscribers: []
})