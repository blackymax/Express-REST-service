import {MigrationInterface, QueryRunner} from "typeorm";

class InitMigration1624207758248 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE TABLE "user" (
        "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
        "name" VARCHAR(100) NOT NULL,
        "login" VARCHAR(100) NOT NULL,
        "password" VARCHAR(100) NOT NULL,
        CONSTRAINT "PK_user" PRIMARY KEY ("id")
      )`);
  
      await queryRunner.query(`CREATE TABLE "column" (
        "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
        "title" VARCHAR(200) NOT NULL,
        "order" INTEGER NOT NULL,
        "boardId" UUID NOT NULL,
        CONSTRAINT "PK_board_column" PRIMARY KEY ("id")
      )`);
  
      await queryRunner.query(`CREATE TABLE "board" (
        "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
        "title" VARCHAR(200) NOT NULL,
        CONSTRAINT "PK_board" PRIMARY KEY ("id")
      )`);
  
      await queryRunner.query(`CREATE TABLE "task" (
        "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
        "title" VARCHAR(200) NOT NULL,
        "order" INTEGER NOT NULL,
        "description" VARCHAR(200) NOT NULL,
        "boardId" UUID NOT NULL,
        "columnId" UUID,
        "userId" UUID,
        CONSTRAINT "PK_task" PRIMARY KEY ("id")
      )`);
  
      await queryRunner.query(`ALTER TABLE "column"
        ADD CONSTRAINT "FK_boards_columns"
        FOREIGN KEY ("boardId") REFERENCES "board"("id")
        ON DELETE CASCADE ON UPDATE NO ACTION
      `);
  
      await queryRunner.query(`ALTER TABLE "task"
        ADD CONSTRAINT "FK_boards_tasks"
        FOREIGN KEY ("boardId") REFERENCES "board"("id")
        ON DELETE CASCADE ON UPDATE NO ACTION
      `);
  
      await queryRunner.query(`ALTER TABLE "task"
        ADD CONSTRAINT "FK_columns_tasks"
        FOREIGN KEY ("columnId") REFERENCES "column"("id")
        ON DELETE SET NULL ON UPDATE NO ACTION
      `);
  
      await queryRunner.query(`ALTER TABLE "task"
        ADD CONSTRAINT "FK_users_tasks"
        FOREIGN KEY ("userId") REFERENCES "user"("id")
        ON DELETE SET NULL ON UPDATE NO ACTION
      `);
    }
  
    async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "task"
        DROP CONSTRAINT "FK_users_tasks"
      `);
  
      await queryRunner.query(`ALTER TABLE "task"
        DROP CONSTRAINT "FK_columns_tasks"
      `);
  
      await queryRunner.query(`ALTER TABLE "task"
        DROP CONSTRAINT "FK_boards_tasks"
      `);
  
      await queryRunner.query(`ALTER TABLE "column"
        DROP CONSTRAINT "FK_boards_columns"
      `);
  
      await queryRunner.query('DROP TABLE "task"');
      await queryRunner.query('DROP TABLE "user"');
      await queryRunner.query('DROP TABLE "board"');
      await queryRunner.query('DROP TABLE "column"');
    }
  }
  
  export { InitMigration1624207758248 as InitMigration }