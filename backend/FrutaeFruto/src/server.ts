import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import {AppDataSource} from "./database/dataSource";
import routers from './routes/receitaRoutes';
import httpErrorMiddleware from './middlewares/ErrorMiddleware';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

app.use(httpErrorMiddleware);

app.use("/imagens", express.static("imagens"));

AppDataSource.initialize().then(async() => {
    console.log("Database started!");
    app.listen(process.env.PORT || 3333, () => {
        console.log("Server started!");
    });
});

