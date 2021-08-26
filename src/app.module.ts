import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemploGetController } from './controllers/ejemplo-get/ejemplo-get.controller';
import { HealthController } from './health/health.controller';
import { PetController } from './pet/pet.controller';
import { ClientController } from './client/client/client.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [
    AppController,
    EjemploGetController,
    HealthController,
    PetController,
    ClientController,
  ],
  providers: [AppService],
})
export class AppModule {}
