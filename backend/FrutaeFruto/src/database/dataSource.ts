import 'reflect-metadata';
import { DataSource } from "typeorm";
import { ReceitaEntity } from "../entities/Receita";
import { ReceitaTable1739321101145 } from './migrations/1739325066059-updateReceitaTable';
export const AppDataSource = new DataSource({
    type: "mysql",
    host:"localhost",
    username:"root",
    password:"root",
    database:"frutoefruta",
    synchronize: true,
    entities: [ReceitaEntity],
    migrations: [ReceitaTable1739321101145],
    subscribers: []
})