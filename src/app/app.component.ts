import { Component, OnInit } from '@angular/core';
import { WetherService } from './services/wether.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchForm= new FormGroup({
    searchInput :new FormControl('',Validators.required)
  });
 

constructor(private weatherService:WetherService){

}

weatherData?:any

// uncomment to allow to search for city


  ngOnInit(): void {
    // this.weatherService.getWeatherData('london').subscribe({
    //     next:(data)=>{this.weatherData=data;
    //   }}
    // )
    }
  title = 'weather';
  onSubmit() {
    // if (this.searchForm.valid) {
    //   // perform search logic here
    //   this.weatherData.name= this.searchForm.value.searchInput;
    //   this.weatherService.getWeatherData(this.weatherData.name).subscribe({
    //     next:(data)=>{this.weatherData=data;}})
      
    //   // clear the input field
    //   this.searchForm.setValue({searchInput: ''});
    // }
 }
}
