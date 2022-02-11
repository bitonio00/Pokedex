import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  const port=process.env.Port || 3333
  await app.listen(port,()=>{
    Logger.log('Listening at http://LocalHost:'+port)
  });
}
bootstrap();
