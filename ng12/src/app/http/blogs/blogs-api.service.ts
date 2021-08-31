import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogsApiService 
{
  base_url_api_firebase = 'https://ui-all-default-rtdb.firebaseio.com/';
  // httpOptions = {
  //   headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'}),
  //   mode: 'no-cors'
  // };

  constructor(private http: HttpClient) { }
    
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
    tap(res => console.log('BLOGS Formatted Resp', res))
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
