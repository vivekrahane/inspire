import { Component, OnInit } from '@angular/core';
import { AuthorDetails, book } from 'src/app/share/models/data.model';
import { AuthorDataService } from 'src/app/share/services/author-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  public authorDetails?:AuthorDetails;

  constructor(private authorData:AuthorDataService) { }

  ngOnInit(){
    this.authorData.getAuthorList().subscribe(res => {
      this.authorDetails = res;
    }, error => {
      console.log(error);
    });
  }

  deleteBook(book:book){
    this.authorData.deleteAuthorBook(book);
  }

  sortBook(sortBy:string){
    this.authorData.sortBooks(sortBy);
  }
 
}
