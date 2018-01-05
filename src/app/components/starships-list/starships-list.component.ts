import { Component, OnInit } from '@angular/core';
import { Starship } from '../../models/starship';
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships:Array<Starship> = [];
  loading = false;
  next: string;
  previous: string;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit() {
    this.callGetStarships();
  }

  callGetStarships(): void{
    this.loading = true;
    this.starshipsService.getStarships().subscribe( 
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

  onNext(): void {
    this.callGetStarshipsPerPage(this.next);
  }

  onPrev(): void {
    this.callGetStarshipsPerPage(this.previous);
  }

  callGetStarshipsPerPage(url): void{
    this.loading = true;
    this.starshipsService.getStarshipsPerPage(url).subscribe( 
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
