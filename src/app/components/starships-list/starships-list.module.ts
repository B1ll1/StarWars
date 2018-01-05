import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from './starships-list.component';
import { StarshipsService } from '../../services/starships.service';
import { SharedPaginationModule } from '../../shared-pagination/shared-pagination.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedPaginationModule
  ],
  exports: [StarshipsListComponent],
  declarations: [
    StarshipsListComponent
  ],
  providers: [
    StarshipsService
  ]
})
export class StarshipsListModule { }
