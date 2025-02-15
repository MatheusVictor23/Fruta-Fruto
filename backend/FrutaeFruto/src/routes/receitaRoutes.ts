import receitaRouter from "../controllers/ReceitaController";
import { Request, Response, Router } from "express";
import upload from "../middlewares/MulterMiddleware";

const routers = Router();

routers.use("/receitas",receitaRouter);

routers.post("/imagens", upload.single("imagem"), (req:Request, res:Response) => {
    if (!req.file) {
        return res.status(400).json({ message: "Nenhuma imagem enviada" });
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ imageUrl });
});

export default routers;