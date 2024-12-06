import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  disabledPrevious = true;
  disabledNext = false;
  currentPage = 0;
  itemsPerPage = 10;
  totalItems = 100;

  findLatestItemInPage() {
    return Math.min(
      (this.currentPage + 1) * this.itemsPerPage,
      this.totalItems
    );
  }

  findFirstItemInPage() {
    return this.currentPage * this.itemsPerPage + 1;
  }

  firstPage() {
    this.currentPage = 0;
    this.disabledPrevious = true;
    this.disabledNext = false;
    if (this.findLatestItemInPage() == this.totalItems) {
      this.disabledNext = true;
    }
  }

  previousPage() {
    this.currentPage -= 1;
    this.disabledPrevious = false;
    this.disabledNext = false;
    if (this.findFirstItemInPage() == 1) {
      this.disabledPrevious = true;
    }
    if (this.findLatestItemInPage() == this.totalItems) {
      this.disabledNext = true;
    }
  }

  nextPage() {
    this.currentPage += 1;
    this.disabledPrevious = false;
    this.disabledNext = false;
    if (this.findFirstItemInPage() == 1) {
      this.disabledPrevious = true;
    }
    if (this.findLatestItemInPage() == this.totalItems) {
      this.disabledNext = true;
    }
  }

  lastPage() {
    this.currentPage = Math.floor((this.totalItems - 1) / this.itemsPerPage);
    this.disabledPrevious = false;
    this.disabledNext = true;
    if (this.findFirstItemInPage() == 1) {
      this.disabledPrevious = true;
    }
  }
}
