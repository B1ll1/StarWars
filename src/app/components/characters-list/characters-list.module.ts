import { NgModule } from '@angular/core';
import { CharactersListComponent } from './characters-list.component';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../services/characters.service';
import { SharedPaginationModule } from '../../shared-pagination/shared-pagination.module';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedPaginationModule
  ],
  exports: [CharactersListComponent],
  declarations: [
    CharactersListComponent,
    CharacterDetailComponent
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersListModule { }
