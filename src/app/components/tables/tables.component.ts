import { Component, OnInit, Input } from '@angular/core';

import { DistanceService } from '../../services/distance.service';
import { QueryHouseData } from '../../models/query-house-data';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  public distanceSorted: QueryHouseData[];
  public moreThanFiveList: QueryHouseData[];
  public streetNameList: QueryHouseData[];
  public closestHomeToSister: QueryHouseData;

  displayedColumns = ["latitude", "longitude", "rooms", "value", "street", "distanceFromHome"];

  // sisters home coordinates (Eberswalder Straße 55)
  private homeLat = 52.5418739;
  private homeLon = 13.4057378;
  private maxHouseValueForMe = 5000000;

  // we pass houses data to this component from parent component. That's how they interact.
  @Input() houses: QueryHouseData[];

  constructor(private readonly distanceService: DistanceService) { }

  ngOnInit() {

    var self = this;

    // calculate distance from home
    this.houses.forEach(function (house) {
      // calling the method for distance calculation
      house.distanceFromHome = self.distanceService.calcDistance(self.homeLat, self.homeLon, house.coords.lat, house.coords.lon)
    });

    // sort by distance. sort function understands which value is bigger by sign of the substraction result between two elements of the array.
    this.distanceSorted = this.houses
      .sort((a, b) => a.distanceFromHome - b.distanceFromHome);

    // a list of houses which have more then 5 rooms. Start with the lowest number of rooms.
    this.moreThanFiveList = this.houses
      .filter(x => x.params != null && x.params.rooms > 5)
      .sort((a, b) => a.params.rooms - b.params.rooms);

    //a list of houses that you do not have all the data for. Sort them by the street-name.
    this.streetNameList = this.houses
      .filter(x => (x.params == null || (x.params.rooms == null && x.params.value == null))
        && (x.coords == null || (x.coords.lat == null && x.coords.lon == null)))
      .sort((a, b) => a.street.localeCompare(b.street));

    //  house that is closest to your sisters home, but only if the house has at least 10 rooms and does not cost more than 5.000.000 €.
    var appropriateHouses = this.houses
      .filter(x => x.params != null &&
        x.params.rooms != null &&
        x.params.value != null &&
        x.params.rooms >= 10 &&
        x.params.value <= this.maxHouseValueForMe)
      .sort((a, b) => a.distanceFromHome - b.distanceFromHome);

    if (appropriateHouses != null && appropriateHouses.length > 1) {
      // taking the home with index 1 because the home with index 0 is sister's home (distance = 0)
      this.closestHomeToSister = appropriateHouses[1]
    }
  }
}
