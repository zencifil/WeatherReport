import { Component, OnInit } from '@angular/core';

import { WeatherStatic } from '../../weather/weather.static';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  city: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.city = this.dataService.getSelectedCity();
  }

}
