import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AirportModule } from './airport/airport.module';

@Module({
  imports: [AirportModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`
  })]
})
export class AppModule {}