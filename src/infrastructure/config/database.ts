import { DataSource } from 'typeorm';
import { UserEntity } from '../persistence/entities/UserEntity';
import { EntrepreneurshipEntity } from '../persistence/entities/EntrepreneurshipEntity';
import { ProductEntity } from '../persistence/entities/ProductEntity';
import { InvestmentIdeaEntity } from '../persistence/entities/InvestmentIdeaEntity';
import { CategoryEntity } from '../persistence/entities/CategoryEntity';
import { ChatEntity } from '../persistence/entities/ChatEntity';
import { MessageEntity } from '../persistence/entities/MessageEntity';
import { FavoriteEntity } from '../persistence/entities/FavoriteEntity';
import { NotificationEntity } from '../persistence/entities/NotificationEntity';
import { PasswordResetTokenEntity } from '../persistence/entities/PasswordResetTokenEntity';
import { DepartmentEntity } from '../persistence/entities/DepartmentEntity';
import { CityEntity } from '../persistence/entities/CityEntity';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'impulsacol',
    entities: [
        UserEntity,
        EntrepreneurshipEntity,
        ProductEntity,
        InvestmentIdeaEntity,
        CategoryEntity,
        ChatEntity,
        MessageEntity,
        FavoriteEntity,
        NotificationEntity,
        PasswordResetTokenEntity,
        DepartmentEntity,
        CityEntity
    ],
    synchronize: false, // Cambiado a false para prevenir pérdida de datos
    logging: false, // Cambiado a false para reducir logs durante desarrollo
    migrations: ['src/infrastructure/migrations/*.ts'],
    migrationsRun: true, // Ejecutará las migraciones al iniciar
    migrationsTableName: 'migrations' // Nombre específico de la tabla de migraciones
}); 