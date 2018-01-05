import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../services/characters.service';
import { CharacterDetailComponent } from './character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [
    CharacterDetailComponent
  ],
  providers: [
    CharactersService
  ]
})
export class CharacterDetailRoutingModule { }
