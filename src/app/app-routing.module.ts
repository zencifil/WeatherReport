import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
