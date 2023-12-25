import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WetherService {

  constructor(private http:HttpClient) { }

  // getWeatherData(cityName:string):Observable<any>{
  //   return this.http.get<any>(environment.weatherApiBaseUrl+cityName, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
  //   });
  //  }

}
