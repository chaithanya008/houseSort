import { Component, OnInit } from '@angular/core';
import { HouseService } from './services/house.service';
import { DistanceService } from './services/distance.service';
import { HouseQuery } from './models/house-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HouseService]
})

export class AppComponent implements OnInit {
  title = 'BerlinUI';
  public hdata: HouseQuery; 
 
  public isDataLoaded: boolean = false;

  public get dataLoaded(): boolean{
    return this.isDataLoaded;
  }

  constructor(private readonly houseService: HouseService, private readonly distanceService: DistanceService) { }

  public ngOnInit(): void {
    this.houseService.getPosts().subscribe(x => {
      console.log(x);
      this.isDataLoaded = true;
      this.hdata = x;
    });
  }
}
