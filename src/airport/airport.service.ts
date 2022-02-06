import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AirportService {

  constructor(private httpService: HttpService) {}
  
  getFlightTracker(): string {
    // return this.httpService.get('dsds');
    return 'test'
  }
}
