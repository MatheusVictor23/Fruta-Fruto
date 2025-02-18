import { AppDataSource } from "../database/dataSource";
import { ImagemEntity } from "../entities/ImagemEntity";
import Imagem from "../interfaces/Imagem";
import ErrorExtension from "../utils/ErrorExtension";


export class ImagemRepository {
    private static imagemRepository = AppDataSource.getRepository(ImagemEntity);

    static async getImagens():Promise<Imagem[]>{
        return await this.imagemRepository.find();
    }

    static async getImagem(id:number):Promise<Imagem | null>{
        const imagem = this.imagemRepository.findOneBy({id});

        if(!imagem){
            throw new ErrorExtension(404,"Imagem não encontrada!");
        }

        return await imagem;

    }

    static async newImagem(imagem:Imagem):Promise<Imagem>{
        return await this.imagemRepository.save(imagem);
    }

    static async deleteImagem(id:number):Promise<string>{
        const imagemDeleted = this.imagemRepository.findOneBy({id});

        if(!imagemDeleted){
            throw new ErrorExtension(404,"Imagem não encontrada!");
        }
        else{
            await this.imagemRepository.delete({id});
        }
        return "Imagem deletada!";
    }
}