import {Component, OnInit} from '@angular/core';
import {ApiWeatherService, Weather} from "./api-weather.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData$: Observable<Weather>;

  constructor(private weatherService: ApiWeatherService) {
  }

  ngOnInit(): void {
    this.weatherData$ = this.weatherService.getWeather()
  }

}
