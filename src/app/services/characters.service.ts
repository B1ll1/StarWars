import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Specie } from '../models/specie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CharactersService {

  characters:Array<Character> = [];
  next: string;
  previous: string;
  currentSpecie: Specie;
  currentCharacter: Character;

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

  getCurrentCharacter(id): Observable<Character>{
    return this.http.get('https://swapi.co/api/people/'+id)
    .map( res => {
      return this.currentCharacter = {
          id: res['url'].replace(/\D/g,''),
          name: res['name'],
          height: res['height'],
          gender: res['gender'],
          url: res['url'],
          species: res['species']
        }
    })
  }

  getCharacterSpecies(url): Observable<Specie> {
    return this.http.get(url)
    .map( res => {
      return this.currentSpecie = {
          name: res['name'],
          classification: res['name'],
          designation: res['designation'],
          average_height: res['average_height'],
          skin_colors: res['skin_colors'],
          hair_colors: res['hair_colors'],
          eye_colors: res['eye_colors'],
          average_lifespan: res['average_lifespan'],
          language: res['language']
        }
    })
  }
}
