import receitaRouter from "../controllers/ReceitaController";
import { Router } from "express";

const routers = Router();

routers.use("/receitas",receitaRouter);

export default routers;