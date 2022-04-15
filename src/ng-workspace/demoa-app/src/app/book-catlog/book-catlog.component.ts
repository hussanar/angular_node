import { Component, OnInit } from '@angular/core';
import { BookdaoService } from '../booksdao.service.service';

@Component({
  selector: 'app-book-catlog',
  templateUrl: './book-catlog.component.html',
  styleUrls: ['./book-catlog.component.css']
})
export class BookCatlogComponent implements OnInit {
  books: Array<any> = [];
  idx: number = 0;
  constructor(private booksvc: BookdaoService) { }

  ngOnInit(): void {
    this.books = this.booksvc.getBooks();
  }

}
