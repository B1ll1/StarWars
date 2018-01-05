import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'characters',
    loadChildren: './components/characters-list/characters-list.module#CharactersListModule'
  },
  {
    path: 'starships',
    loadChildren: './components/starships-list/starships-list.module#StarshipsListModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
