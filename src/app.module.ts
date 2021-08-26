import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemploGetController } from './controllers/ejemplo-get/ejemplo-get.controller';
import { HealthController } from './health/health.controller';

@Module({
  imports: [],
  controllers: [AppController, EjemploGetController, HealthController],
  providers: [AppService],
})
export class AppModule {}
