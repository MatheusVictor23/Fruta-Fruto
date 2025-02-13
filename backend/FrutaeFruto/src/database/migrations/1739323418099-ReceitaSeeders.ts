import { MigrationInterface} from "typeorm";
import { AppDataSource } from "../dataSource";
import { Receita } from "../../entities/Receita";
import receitas from "../seeders/ReceitaSeed";
export class ReceitaSeeders1739323418099 implements MigrationInterface {

    public async up(): Promise<void> {
        const receitaRepository = AppDataSource.getRepository(Receita);

        await receitaRepository.insert(receitas);
    }

    public async down(): Promise<void> {
    }

}
