import { Injectable } from '@angular/core';
import { Starship } from '../models/starship';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Character } from '../models/character';

@Injectable()
export class StarshipsService {

  starships:Array<Starship> = [];
  next: string;
  previous: string;
  currentStarship: Starship;
  currentPilot: Character;

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

  getCurrentStarship(id): Observable<Starship>{
    return this.http.get('https://swapi.co/api/starships/'+id)
    .map( res => {
      return this.currentStarship = {
          id: res['url'].replace(/\D/g,''),
          name: res['name'],
          length: res['length'],
          cargo_capacity: res['cargo_capacity'],
          url: res['url'],
          pilots: res['pilots']
        }
    })
  }

  getStarshipPilots(url): Observable<Character> {
    return this.http.get(url)
    .map( res => {
      return this.currentPilot = {
          id: res['url'].replace(/\D/g,''),
          name: res['name'],
          height: res['height'],
          gender: res['gender'],
          url: res['url'],
          species: res['species']
        }
    })
  }

}
