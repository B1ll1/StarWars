import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list.component';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../services/characters.service';
import { SharedPaginationModule } from '../../shared-pagination/shared-pagination.module';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent,
  },
  {
    path: ':id',
    component: CharacterDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedPaginationModule
  ],
  exports: [RouterModule],
  declarations: [
    CharactersListComponent,
    CharacterDetailComponent
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersListRoutingModule { }
