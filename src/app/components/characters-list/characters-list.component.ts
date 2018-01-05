import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../models/character';

@Component({
  selector: 'characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters:Array<Character> = [];
  loading = false;
  next: string;
  previous: string;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.callGetAllCharacters();
  }

  callGetAllCharacters(): void{
    this.loading = true;
    this.charactersService.getAllCharacters().subscribe( 
      data => {
        this.next = this.charactersService.next;
        this.previous = this.charactersService.previous;
        this.loading = false;
        this.characters = data;
      },
      err => {
        this.characters = [];
      }
    );
  }

  onNext(): void {
    this.callGetCharactersPerPage(this.next);
  }

  onPrev(): void {
    this.callGetCharactersPerPage(this.previous);
  }

  callGetCharactersPerPage(url){
    this.loading = true;
    this.charactersService.getCharactersPerPage(url).subscribe( 
      data => {
        this.next = this.charactersService.next;
        this.previous = this.charactersService.previous;
        this.loading = false;
        this.characters = data;
      },
      err => {
        this.characters = [];
      }
    );
  }

  callNextPage(){
    this.callGetCharactersPerPage(this.next);
  }

  callPreviousPage(){
    this.callGetCharactersPerPage(this.previous);
  }
}
