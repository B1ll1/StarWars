import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from './starships-list.component';
import { StarshipsService } from '../../services/starships.service';
import { SharedPaginationModule } from '../../shared-pagination/shared-pagination.module';

const routes: Routes = [
  {
    path: '',
    component: StarshipsListComponent
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
    StarshipsListComponent
  ],
  providers: [
    StarshipsService
  ]
})
export class StarshipsListRoutingModule { }
