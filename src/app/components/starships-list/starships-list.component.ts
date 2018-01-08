import { Component, OnInit } from '@angular/core';
import { Starship } from '../../models/starship';
import { StarshipsService } from '../../services/starships.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit, OnDestroy {
  subGetAllStarships: any;
  subGetStarshipsPerPage: any;

  starships:Array<Starship> = [];
  loading = false;
  next: string;
  previous: string;
  nameOrder: boolean = true;
  glyph: boolean = true;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit() {
    this.callGetStarships();
  }

  ngOnDestroy() {
    this.subGetAllStarships.unsubscribe();
    this.subGetStarshipsPerPage.unsubscribe();
  }

  callGetStarships(): void{
    this.loading = true;
    this.subGetAllStarships = this.starshipsService.getStarships().subscribe( 
      data => {
        this.next = this.starshipsService.next;
        this.previous = this.starshipsService.previous;
        this.loading = false;
        this.starships = data;
      },
      err => {
        this.starships = [];
      }
    );
  }

  changeOrderByName() {
    if(this.nameOrder == true){
      this.starships.reverse()
      this.nameOrder = false;
    }
    else{
      this.sortStarshipsAlphabeticallyByName();
      this.nameOrder = true;
    }
  }

  sortStarshipsAlphabeticallyByName() {
    this.starships.sort(function (a, b) {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });
  }

  onNext(): void {
    this.callGetStarshipsPerPage(this.next);
  }

  onPrev(): void {
    this.callGetStarshipsPerPage(this.previous);
  }

  callGetStarshipsPerPage(url): void{
    this.loading = true;
    this.subGetStarshipsPerPage = this.starshipsService.getStarshipsPerPage(url).subscribe( 
      data => {
        this.next = this.starshipsService.next;
        this.previous = this.starshipsService.previous;
        this.loading = false;
        this.starships = data;
      },
      err => {
        this.starships = [];
      }
    );
  }

}
