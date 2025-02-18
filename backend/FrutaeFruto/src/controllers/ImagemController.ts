import { Request, Response, Router } from "express";
import { ImagemRepository } from "../repositories/ImagemRepository";
import multer from "multer";
import path from "path";

// Configuração do Multer para armazenar arquivos no servidor
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..","..", "uploads")); // Pasta onde as imagens serão salvas
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    }
});

const upload = multer({ storage });

class ImagemController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/", this.getImagens);
        this.router.get("/:id", this.getImagem);
        this.router.post("/upload", upload.single("imagem"), this.uploadImagem);
        this.router.delete("/:id", this.deleteImagem);
    }

    private async getImagens(req: Request, res: Response) {
        const imagens = await ImagemRepository.getImagens();
        return res.status(200).json(imagens);
    }

    private async getImagem(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const imagem = await ImagemRepository.getImagem(id);
        return res.status(200).json(imagem);
    }

    private async uploadImagem(req: Request, res: Response) {
        if (!req.file) {
            return res.status(400).json({ message: "Nenhuma imagem enviada" });
        }

        const novaImagem = {
            titulo: req.file.filename,
            url: `/uploads/${req.file.filename}`,
        };

        const imagemSalva = await ImagemRepository.newImagem(novaImagem);
        return res.status(201).json(imagemSalva);
    }


    private async deleteImagem(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const mensagem = await ImagemRepository.deleteImagem(id);
        return res.status(200).json({ message: mensagem });
    }
}

const imagemRouter = new ImagemController().router;
export default  imagemRouter;