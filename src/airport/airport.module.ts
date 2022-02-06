import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AirportController } from './airport.controller';
import { AirportService } from './airport.service';

@Module({
  controllers: [AirportController],
  providers: [AirportService],
  imports: [HttpModule]
})
export class AirportModule {}
