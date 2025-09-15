import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: parseInt(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [],
}
