import { Receita} from "../entities/Receita";
import { IReceita } from "../interfaces/IReceita";
import { AppDataSource } from "../database/dataSource";

export class ReceitaRepository{
    private static receitaRepository = AppDataSource.getRepository(Receita); //repositório espelhado na entidade Receita

    static async getReceitas():Promise<IReceita[]>{
        //SELECT * FROM receitas
        console.log(this.receitaRepository.find());
        return this.receitaRepository.find();
    }

    static async getReceita(id:number):Promise<IReceita | null>{
        const receita = this.receitaRepository.findOneBy({id});
        return receita;
    } 

    static async newReceita(receita:IReceita):Promise<IReceita>{
        const receitaNova = this.receitaRepository.save(receita);
        return receitaNova;
    }

    static async updateReceita(id:number, receita:IReceita):Promise<IReceita>{
        const receitaExistente = await this.receitaRepository.findOneBy({ id });

        if (!receitaExistente) {
            throw new Error('Receita não encontrada');
        }
    
        await this.receitaRepository.update(id, receita);
    
        // Buscar a receita atualizada para retornar
        const receitaAtualizada = await this.receitaRepository.findOneBy({ id });
    
        return receitaAtualizada as IReceita;
    }

    static async deleteReceita(id:number):Promise<string>{
        this.receitaRepository.delete({id});

        return "Receita deletada!"
    }

}