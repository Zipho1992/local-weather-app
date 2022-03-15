import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather

  //Dummy data
  // constructor() { 
  //   this.current ={
  //     city: 'Johannesburg',
  //     country: 'ZA',
  //     date: new Date(),
  //     image: 'assets/img/sunny.svg',
  //     temperature: 72,
  //     description: 'sunny'
  //   } as ICurrentWeather
  // }

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('New York','US')
      .subscribe(data => (this.current = data))
  }

}
