import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ReceitaTable1739321101145 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'receitas',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'titulo',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'passo',
                        type: 'json',  // Alterado para JSON para suportar objetos complexos
                        isNullable: false
                    },
                    {
                        name: 'imagemUrl',
                        type: 'varchar',
                        length: '150',
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("receitas");
    }

}
