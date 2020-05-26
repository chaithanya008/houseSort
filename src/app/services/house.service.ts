import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HouseQuery } from '../models/house-query';

@Injectable()
export class HouseService {

  constructor(private http: HttpClient) { }

  posts: any;
  // URL = 'https://demo.interfacema.de/programming-assessment-1.0/buildings';
  // URL = './assets/data/housedata.json'

  //Using below mocky.io URL by generating API link for same API data as mentioned to handle CORS
  URL = 'http://www.mocky.io/v2/5d8dce27310000cf032b5090'

  hdata: any;

  public getPosts(): Observable<HouseQuery> {

    this.posts = this.http.get<HouseQuery>(this.URL);

    return this.posts;
  }
}
