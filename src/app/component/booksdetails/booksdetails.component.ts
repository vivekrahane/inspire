import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { book } from 'src/app/share/models/data.model';

@Component({
  selector: 'app-booksdetails',
  templateUrl: './booksdetails.component.html',
  styleUrls: ['./booksdetails.component.scss']
})
export class BooksdetailsComponent implements OnInit{
  @Input() authorBooks?: book[];
  @Output() deleteBook?:any = new EventEmitter<book>();
  constructor(){
  }

  ngOnInit(){
  }
}
