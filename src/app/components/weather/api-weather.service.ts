import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

export interface Weather {
  location:   string;
  region:     string;
  country:    string;
  timezone:   string;
  local_time: string;
  forecast:   Forecast[];
}

export interface Forecast {
  date:           Date;
  max_temp_c:     number;
  min_temp_c:     number;
  avg_temp_c:     number;
  will_it_rain:   boolean;
  chance_of_rain: number;
  condition:      string;
  icon_url:       string;
  sunrise:        string;
  sunset:         string;
  max_wind_mph:   number;
  max_wind_kph:   number;
}


@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  private url: string = 'https://api.m3o.com/v1/weather/Forecast'

  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<Weather>{

    let request = {
      "days": 1,
      "location": "Warszawa",
    }

    return this.http.post<Weather>(
      this.url,
      request,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + environment.weatherApiKey
        })
      }
    );
  }
}
