import {Request, Response, Router} from "express";
import { ReceitaRepository } from "../repositories/ReceitaRepository";

class ReceitaController{
    public router: Router;

    constructor(){
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get('/', this.getReceitas);
        this.router.get('/:id', this.getReceita);
        this.router.post('/', this.createReceita);
        this.router.put('/:id', this.updateReceita);
        this.router.delete('/:id', this.deleteReceita);
    }

    private async getReceitas(req:Request, res:Response){
        const receitas = await ReceitaRepository.getReceitas();
        res.status(200).json(receitas);
    }

    private async getReceita(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const receita = ReceitaRepository.getReceita(id);
        res.status(200).json(receita);
    }

    private async createReceita(req:Request, res:Response){
        const receitaCreated = await ReceitaRepository.newReceita(req.body);
        res.status(201).json(receitaCreated);
    }

    private async updateReceita(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const receitaUpdated = ReceitaRepository.updateReceita(id, req.body);
        res.status(200).json(receitaUpdated);
    }

    private async deleteReceita(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const receitaDeleted = ReceitaRepository.deleteReceita(id);
        res.status(200).json({message: receitaDeleted})
    }
}

const receitaRouter = new ReceitaController().router

export default receitaRouter;