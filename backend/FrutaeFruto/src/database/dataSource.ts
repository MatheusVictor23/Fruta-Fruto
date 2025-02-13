import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Receita } from "../entities/Receita";
import { ReceitaTable1739321101145 } from './migrations/1739325066059-updateReceitaTable';
import { ReceitaSeeders1739323418099 } from './migrations/1739323418099-ReceitaSeeders';
export const AppDataSource = new DataSource({
    type: "mysql",
    host:"localhost",
    username:"root",
    password:"root",
    database:"frutoefruta",
    synchronize: true,
    entities: [Receita],
    migrations: [ReceitaTable1739321101145,ReceitaSeeders1739323418099],
    subscribers: []
})