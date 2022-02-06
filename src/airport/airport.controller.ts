import { Controller, Get } from '@nestjs/common';

@Controller('airport')
export class AirportController {

  @Get()
  getTest() {
    return 'Ola'
  }
}
