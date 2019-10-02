import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor() { }

  // distance calculation method
  public calcDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    var result = 0;
    const RADIANS: number = 180 / 3.14159265;
    const METRES_IN_MILE: number = 1609.34;
    
    if (lat1 == lat2 && lon1 == lon2) {
      result = 0;
    
    } else {
      // Calculating Distance between Points
      var lt1 = lat1 / RADIANS;
      var lg1 = lon1 / RADIANS;
      var lt2 = lat2 / RADIANS;
      var lg2 = lon2 / RADIANS;
    
      // radius of earth in miles (3,958.8) * metres in a mile * position on surface of sphere...
      result = (3958.8 * METRES_IN_MILE) * Math.acos(Math.sin(lt1) * Math.sin(lt2) + Math.cos(lt1) * Math.cos(lt2) * Math.cos(lg2 - lg1));
    }
    return result; }

}
