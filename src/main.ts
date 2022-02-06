import { NestFactory } from '@nestjs/core';
import { AirportModule } from './airport/airport.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AirportModule);

  const config = new DocumentBuilder()
    .setTitle('Airport')
    .setDescription('The Airport API description')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document)

  await app.listen(3000);
}
bootstrap();
