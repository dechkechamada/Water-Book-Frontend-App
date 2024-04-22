import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WaterReading } from '../core/types';
import { DOMAIN_URL } from '../core/constants';

const WATER_READING_SVC_URL = DOMAIN_URL + 'water-service/readings';

@Injectable({
  providedIn: 'root'
})
export class WaterReadingService {

  constructor(private $http: HttpClient) { }

  saveWaterReading(waterReadingData: WaterReading) {
    return this.$http.post(WATER_READING_SVC_URL, waterReadingData)
  }

  getWaterReadings() {
    return this.$http.get(WATER_READING_SVC_URL);
  }
}
