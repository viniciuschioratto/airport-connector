import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirportService } from './airport/airport.service';
import { AirportModule } from './airport/airport.module';

@Module({
  imports: [AirportModule],
  controllers: [AppController],
  providers: [AppService, AirportService],
})
export class AppModule {}
