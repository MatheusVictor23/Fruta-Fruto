import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import {AppDataSource} from "./database/dataSource";

const app = express();

app.use(cors());

app.use(express.json());

AppDataSource.initialize().then(async() => {
    console.log("Database started!");
    app.listen(process.env.PORT || 3333, () => {
        console.log("Server started!");
    });
});

