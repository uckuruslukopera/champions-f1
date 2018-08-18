import { Component, OnInit, Input, Output, EventEmitter, HostBinding, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {
  @HostBinding('class.c-pagination') true;

  @Input() count: number;
  @Input() pageSize: number;
  @Input() currentPage: number;

  pages: number[];

  @Output() pageSelected: EventEmitter<{page: number}> = new EventEmitter<{page: number}>();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.count) {
      const pageCount = Math.ceil(this.count / this.pageSize);
      this.pages = Array.from(Array(pageCount).keys()).map(i => i + 1);
    }
  }

  previous(e) {
    this.go(this.currentPage - 1);
  }

  next(e) {
    this.go(this.currentPage + 1);
  }

  go(e) {
    if (this.currentPage !== e) this.pageSelected.emit(e);
  }

}
