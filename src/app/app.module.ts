import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherService } from './weather/weather.service';
import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
