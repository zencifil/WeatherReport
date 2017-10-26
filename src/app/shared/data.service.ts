import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { WeatherObjectModel } from '../models/weather-object.model';
import { WeatherStatic } from '../weather/weather.static';
import { WeatherService } from '../weather/weather.service';

@Injectable()
export class DataService {
  selectedCity: string;

  constructor(private httpClient: HttpClient,
              private weatherService: WeatherService) {}

  getWeather() {
    this.httpClient.get<WeatherObjectModel>(WeatherStatic.WeatherDomain, {
      observe: 'body',
      params: new HttpParams().set('APPID', WeatherStatic.ApiKey).append('q', this.selectedCity)
    }).map((weather) => {
      return weather;
    }).subscribe((weather) => {
      this.weatherService.setWeatherObject(weather);
    });
  }

  getSelectedCity(): string {
    return this.selectedCity;
  }

  setSelectedCity(city: string) {
    this.selectedCity = city;
  }
}
