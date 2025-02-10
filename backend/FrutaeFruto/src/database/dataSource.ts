import 'reflect-metadata';
import { DataSource } from "typeorm";
import { ReceitaEntity } from "../entities/Receita"

export const AppDataSource = new DataSource({
    type: "mysql",
    host:"localhost",
    username:"root",
    password:"root",
    database:"frutoefruta",
    synchronize: true,
    entities: [ReceitaEntity],
    migrations: [],
    subscribers: []
})