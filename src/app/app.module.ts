import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseService } from './services/house.service';
import { DistanceService } from './services/distance.service';
import { TablesComponent } from './components/tables/tables.component';
import { MatTableModule } from "@angular/material";
import { HousesTableComponent } from './components/houses-table/houses-table.component';
  
@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    HousesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],

  bootstrap: [AppComponent],
  providers: [HouseService, DistanceService]
})
export class AppModule { }
