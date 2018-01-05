import { Injectable } from '@angular/core';
import { Starship } from '../models/starship';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class StarshipsService {

  starships:Array<Starship> = [];
  next: string;
  previous: string;

  constructor(public http: HttpClient) { }

  getStarships(): Observable<Starship[]> {
    return this.http.get('https://swapi.co/api/starships')
    .map( res => {
      this.next = res['next'];
      this.previous = res['previous'];
      return res['results'].map( item => {
          return {
            id: item.url.replace(/\D/g,''),
            name: item.name,
            length: item.length,
            cargo_capacity: item.cargo_capacity,
            url: item.url,
            pilots: item.pilots,
          };
      });
      }
    )
  }

  getStarshipsPerPage(url): Observable<Starship[]> {
    return this.http.get(url)
    .map( res => {
      this.next = res['next'];
      this.previous = res['previous'];
      return res['results'].map( item => {
          return {
            id: item.url.replace(/\D/g,''),
            name: item.name,
            length: item.length,
            cargo_capacity: item.cargo_capacity,
            url: item.url,
            pilots: item.pilots,
          };
      });
      }
    )
  }

}
