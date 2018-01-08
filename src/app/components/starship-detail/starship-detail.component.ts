import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit, OnDestroy {
  subRoute: any;
  subStarship: any;
  subPilots: any;;

  currentStarship: any;
  currentPilots: Array<Character> = [];
  loadingStarshipInfo = true;
  loadingPilotsInfo = true;
  searchInput: string = '';

  constructor(
    private starshipsService: StarshipsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subRoute = this.route.params.subscribe( params => {
      this.subStarship = this.starshipsService.getCurrentStarship(params.id).subscribe( 
        data => {
          this.loadingStarshipInfo = false;
          this.currentStarship = data;
          this.callGetStarshipPilots(this.currentStarship.pilots);
        },
        err => {
          this.currentStarship = {};
        }
      )
    });
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
    this.subStarship.unsubscribe();
  }

  callGetStarshipPilots(urls): void{
    urls.map( url => {
      this.subPilots = this.starshipsService.getStarshipPilots(url).subscribe( 
        data => {
          this.currentPilots.push(data);
          this.subPilots.unsubscribe();    
        },
        err => {
          this.currentPilots = [];
          this.subPilots.unsubscribe();
        }
      );
    })
    this.loadingPilotsInfo = false;    
  }

  filterPilotsByName(): void{
    
  }
}
