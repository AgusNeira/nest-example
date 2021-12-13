import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';
import credentials from './credentials';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            ...credentials,
            entities: [User],
            synchronize: true
        }),
        UserModule
    ],
})
export class AppModule {}
