import { Component, OnInit, Injectable, Input, ElementRef, ViewChild } from '@angular/core';

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
  @ViewChild('city') city;

  subscription: Subscription;

  constructor(private weatherService: WeatherService,
    private dataService: DataService,
    private cityInput: ElementRef) { }

  ngOnInit() {
    this.dataService.getWeather(this.city.nativeElement.value);
    this.subscription = this.weatherService.weatherChanged
      .subscribe((weather: WeatherObjectModel) => {
        this.weather = weather;
      });
    this.weather = this.weatherService.getWeatherObject();
  }

  getWeather() {
    this.dataService.getWeather(this.city.nativeElement.value);
  }
}
