import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.json({ limit: '12mb' }));

  await app.listen(process.env.APP_PORT, () => {
    console.log(`App running on port ${process.env.APP_PORT}`);
  });
}
bootstrap();
