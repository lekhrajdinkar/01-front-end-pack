import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { AppStoreSelector, BlogLoadAction } from '../../reducers/redux';


@Injectable({
  providedIn: 'root'
})
export class BlogsApiService extends AppStoreSelector
{
  base_url_api_firebase = 'https://ui-all-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient, private store: Store) { super(store)}
    
  // GET
  loadBlog$ = () : Observable<any> => this.http.get(this.base_url_api_firebase+'blogs.json')
  .pipe(
    tap(res => console.log('BLOGS GET Resp', res))
    ,map((res: any) => {
      const newBlog: any[] = [];
      //d.entries().forEach((id: string,v: any) => {console.log(id,v);  newBlog.push({...v, id}) });
      for(const key in res){
        newBlog.push({...res[key], key})
      }
      return newBlog;
    }),
    tap(res => console.log('BLOGS Formatted Resp', res)),
    tap(data => this.store.dispatch(new BlogLoadAction(data))) //store
  );
  
  // POST
  postBlogs$ = (blog: any): Observable<any> => 
  {
    return this.http.post(this.base_url_api_firebase+'blogs.json', blog)
    .pipe(
        tap((d:any) => console.log('POST Blog response: ', d)) 
    );
  }
  



}
