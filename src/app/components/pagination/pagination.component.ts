import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent{

  @Input() next: string;
  @Input() previous: string;
  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();

  constructor() { }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(next: boolean): void {
    this.goNext.emit(next);
  }
}
