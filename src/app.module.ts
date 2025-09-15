import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/db.config';
import {CacheModule} from '@nestjs/cache-manager'
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    CacheModule.register(),
    TypeOrmModule.forRoot(dbConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
