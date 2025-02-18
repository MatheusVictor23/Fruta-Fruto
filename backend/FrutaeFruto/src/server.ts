import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/dataSource";
import routers from "./routes/receitaRoutes"; // Agora importando todas as rotas corretamente
import httpErrorMiddleware from "./middlewares/ErrorMiddleware";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routers); 

app.use(httpErrorMiddleware);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

AppDataSource.initialize().then(async () => {
    console.log("Database started!");
    app.listen(process.env.PORT || 3333, () => {
        console.log("Server started on port", process.env.PORT || 3333);
    });
});