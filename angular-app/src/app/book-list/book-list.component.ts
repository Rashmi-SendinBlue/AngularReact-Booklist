import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
   public booksList: any[];

   @Input('books')
   set books(books: string){
     this.booksList = JSON.parse(books);
   }

   @Output('bookSelected') bookSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selected(book: any){
    this.bookSelected.emit(JSON.stringify(book));
  }

}
