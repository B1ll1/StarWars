import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Specie } from '../../models/specie';
import { Character } from '../../models/character';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  subRoute: any;
  subSpecie: any;
  subCharacter: any;
  loadingCharacterInfo = true;
  loadingSpecieInfo = true;
  
  currentCharacter: any;
  currentSpecie: any;

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subRoute = this.route.params.subscribe( params => {
      this.subCharacter = this.characterService.getCurrentCharacter(params.id).subscribe( 
        data => {
          this.loadingCharacterInfo = false;
          this.currentCharacter = data;
          this.callGetCharacterSpecie(this.currentCharacter.species[0]);
        },
        err => {
          this.currentSpecie = {};
        }
      )
    });
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
    this.subSpecie.unsubscribe();
    this.subCharacter.unsubscribe();
  }

  callGetCharacterSpecie(url): void{
    this.subSpecie = this.characterService.getCharacterSpecies(url).subscribe( 
      data => {
        this.loadingSpecieInfo = false;
        this.currentSpecie = data;
      },
      err => {
        this.currentSpecie = {};
      }
    );
  }
}
