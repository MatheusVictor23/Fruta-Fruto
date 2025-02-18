import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ImagemTable1739907889330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'imagens',
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
                        isNullable:false
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imagens');
    }

}
