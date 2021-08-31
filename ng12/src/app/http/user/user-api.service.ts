import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService 
{
  user_url = `https://randomuser.me/api?results=20`;
  base_url_api_firebase = 'https://ui-all-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { 
    this.getUser$(30);
  }

  
   getUser$ = (count?: number): Observable<any> => this.http.get(this.user_url)
   .pipe(
        tap((d:any) => console.log(d))
      //,tap((d:any) => console.log(JSON.parse(d.results)))
      , map((d:any) => d.results)
      
    );
  
  
}
