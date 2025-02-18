import { Request, Response, Router } from "express";
import { ImagemRepository } from "../repositories/ImagemRepository";


export class ImagemController {
    public router:Router;

    constructor(){
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get('/', this.getImagens);
        this.router.get('/:id', this.getImagem);
        this.router.post('/', this.newImagem);
        this.router.delete('/:id', this.deleteImagem);
    }

    private async getImagens(req:Request, res:Response){
        const receitas = ImagemRepository.getImagens();
        return res.status(200).json(receitas);
    }

    private async getImagem(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const receita = ImagemRepository.getImagem(id);
        return res.status(200).json(receita);
    }

    private async newImagem(req:Request, res:Response){
        const imagem = ImagemRepository.newImagem(req.body);
        return res.status(200).json(imagem);
    }

    private async deleteImagem(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const deletedImagem = await ImagemRepository.deleteImagem(id);
        return res.status(200).json(deletedImagem);
    }
}

const imagemRouter = new ImagemController().router;
export default imagemRouter;