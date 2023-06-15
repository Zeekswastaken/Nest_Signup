// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import typeOrmConfig from '../../typeorm.config';
import { join } from 'path';
import { User } from './app.entity';
import { adminRepository } from './admin.repository';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([User, adminRepository]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'pages'),
      serveRoot: '/login',
      serveStaticOptions: {
        index: false, // Disable directory indexing
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
