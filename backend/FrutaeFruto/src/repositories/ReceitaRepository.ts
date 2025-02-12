import { ReceitaEntity } from "../entities/Receita";
import { Receita } from "../interfaces/IReceita";
import { AppDataSource } from "../database/dataSource";

export class ReceitaRepository{
    private static receitaRepository = AppDataSource.getRepository(ReceitaEntity);

    static async getReceitas():Promise<Receita[]>{
        return this.receitaRepository.find();
    }

    static async getReceita(id:number):Promise<Receita | null>{
        const receita = this.receitaRepository.findOneBy({id});
        return receita;
    } 

    static async newReceita(receita:Receita):Promise<Receita>{
        const receitaNova = this.receitaRepository.save(receita);
        return receitaNova;
    }

    static async updateReceita(id:number, receita:Receita):Promise<Receita>{
        const receitaExistente = await this.receitaRepository.findOneBy({ id });

        if (!receitaExistente) {
            throw new Error('Receita não encontrada');
        }
    
        await this.receitaRepository.update(id, receita);
    
        // Buscar a receita atualizada para retornar
        const receitaAtualizada = await this.receitaRepository.findOneBy({ id });
    
        return receitaAtualizada as Receita;
    }

    static async deleteReceita(id:number):Promise<string>{
        this.receitaRepository.delete({id});

        return "Receita deletada!"
    }

}