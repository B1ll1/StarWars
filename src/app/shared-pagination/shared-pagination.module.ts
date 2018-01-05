import { NgModule } from '@angular/core';
import { PaginationComponent } from '../components/pagination/pagination.component';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ]
})
export class SharedPaginationModule { }
