import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CharactersService {

  characters:Array<Character> = [];
  next: string;
  previous: string;

  constructor(public http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get('https://swapi.co/api/people')
    .map( res => {
      this.next = res['next'];
      this.previous = res['previous'];
      return this.characters = res['results'].map( item => {
          return {
            id: item.url.replace(/\D/g,''),
            name: item.name,
            height: item.height,
            gender: item.gender,
            url: item.url,
            species: item.species[0]
          };
      });
      }
    )
  }

  getCharactersPerPage(url): Observable<Character[]> {
    return this.http.get(url)
    .map( res => {
      this.next = res['next'];
      this.previous = res['previous'];
      return this.characters = res['results'].map( item => {
          return {
            id: item.url.replace(/\D/g,''),
            name: item.name,
            height: item.height,
            gender: item.gender,
            url: item.url,
            species: item.species[0]
          };
      });
      }
    )
  }

}
