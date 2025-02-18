import receitaRouter from "../controllers/ReceitaController";
import imagemRouter from "../controllers/ImagemController";
import { Router } from "express";

const routers = Router();

routers.use("/receitas",receitaRouter);

routers.use("/imagens", imagemRouter);

export default routers;