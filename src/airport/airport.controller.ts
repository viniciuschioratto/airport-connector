import { Controller, Get } from '@nestjs/common';
import { AirportService } from './airport.service';

@Controller('airport')
export class AirportController {

  constructor(private airportService: AirportService) {}

  @Get('tracker')
  flightTracker(): string {
    return this.airportService.getFlightTracker()
  }

  // @Get('schedules')
  // flightSchedules() {
  //   return 'Ola 1'
  // }

  // @Get('status')
  // flightStatus() {
  //   return 'Ola 2'
  // }

  // @Get('alert')
  // flightAlert() {
  //   return 'Ola 2'
  // }

  // @Get('nearby')
  // nearBy() {
  //   return 'Ola 2'
  // }

  // @Get('autocomplete')
  // autocomplete() {
  //   return 'Ola 2'
  // }

  // @Get('airlines')
  // airlines() {
  //   return 'Ola 2'
  // }
}
