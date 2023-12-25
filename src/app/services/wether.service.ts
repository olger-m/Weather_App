import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WetherService {

  constructor(private http:HttpClient) { }
// uncomment this methode to allow the app to get the weather data from the api 
// you might need to provide your own api key in the enviroment.ts 


  // getWeatherData(cityName:string):Observable<any>{
  //   return this.http.get<any>(environment.weatherApiBaseUrl+cityName, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
  //   });
  //  }

}
