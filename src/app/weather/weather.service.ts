import { Injectable } from '@angular/core';

import { WeatherObjectModel } from '../models/weather-object.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WeatherService {

  weatherChanged = new Subject<WeatherObjectModel>();

  private weatherObject: WeatherObjectModel;

  setWeatherObject(weatherObjects: WeatherObjectModel) {
    this.weatherObject = weatherObjects;
    this.weatherChanged.next(this.weatherObject);
  }

  getWeatherObject() {
    return this.weatherObject;
  }
}
