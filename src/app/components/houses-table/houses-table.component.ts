import { Component, OnInit, Input } from '@angular/core';
import { QueryHouseData } from '../../models/query-house-data';
import { MatTableModule } from "@angular/material";

@Component({
  selector: 'app-houses-table',
  templateUrl: './houses-table.component.html',
  styleUrls: ['./houses-table.component.css']
})
export class HousesTableComponent implements OnInit {

  @Input() houses: QueryHouseData[];

  displayedColumns = ["latitude", "longitude", "rooms", "value", "street", "distanceFromHome"];

  constructor() { }

  ngOnInit() {
  }

}
