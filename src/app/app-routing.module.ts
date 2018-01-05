import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersListComponent
  },
  {
    path: 'starships',
    component: StarshipsListComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'starships/:id',
    component: StarshipDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
