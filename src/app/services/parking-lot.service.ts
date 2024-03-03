import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { HttpMethod } from '../utils/http-constants';
import { ParkingLotMetaData } from '../model/metadata.interface';
import { ParkingLotCurrentState } from '../model/current-state.interface';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {
  private baseUrl = 'https://api.parking-pilot.com/parkinglots';

  constructor(private httpService: HttpService) { }

  getParkingLotCurrentStateData(): Observable<ParkingLotCurrentState[]> {
    const url = `${this.baseUrl}/current-state`;
    return this.httpService.request<ParkingLotCurrentState[]>(HttpMethod.GET, url);
  }

  getParkingLotMetaData(): Observable<ParkingLotMetaData[]> {
    const url = `${this.baseUrl}/meta-data`;
    return this.httpService.request<ParkingLotMetaData[]>(HttpMethod.GET, url);
  }
}
