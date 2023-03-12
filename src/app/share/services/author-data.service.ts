import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, take } from 'rxjs';
import { AuthorListDeleteAction, AuthorListRequestAction, AuthorListSuccessAction, AuthorSortBookAction } from 'src/app/actions/author-action';
import { getAuthorData, getAuthorLoaded, getAuthorLoading, RootReducerState } from 'src/app/reducers';
import { AuthorDetails, book } from '../models/data.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataService {

  constructor(private httpService:HttpService,private store: Store<RootReducerState>) { }

  getAuthorData(): Observable<AuthorDetails> {
    return this.httpService.get('/books.json')
      .pipe(map(data => data.data as AuthorDetails));
  }

  getAuthorList() {
    const loading$ = this.store.select(getAuthorLoading);
    const loaded$ = this.store.select(getAuthorLoaded);
    const getAuthorData$ = this.store.select(getAuthorData);
    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
      if ((!data[0] && !data[1])) {
        this.store.dispatch(new AuthorListRequestAction());
        this.getAuthorData().subscribe(res => {
          this.store.dispatch(new AuthorListSuccessAction({data: res}));
        }, error => {
          console.log(error);
        });
      }
    });
    return getAuthorData$;
  }

  deleteAuthorBook(book:book){
    this.store.dispatch(new AuthorListDeleteAction({book}))
  }

  sortBooks(sortBy = 'title'){
    this.store.dispatch(new AuthorSortBookAction({sortBy}))
  }

}
