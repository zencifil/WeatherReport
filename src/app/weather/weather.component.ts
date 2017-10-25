import { Component, OnInit, Injectable, Input } from '@angular/core';

import { WeatherObjectModel } from '../models/weather-object.model';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from './weather.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

@Injectable()
export class WeatherComponent implements OnInit {
  @Input() weather: WeatherObjectModel;

  subscription: Subscription;

  constructor(private weatherService: WeatherService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getWeather('London');
    this.subscription = this.weatherService.weatherChanged
      .subscribe((weather: WeatherObjectModel) => {
        this.weather = weather;
      });
    this.weather = this.weatherService.getWeatherObject();
  }

  getWeather() {
    this.dataService.getWeather('London');
  }
}
