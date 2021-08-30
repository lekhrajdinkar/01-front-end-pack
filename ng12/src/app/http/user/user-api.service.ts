import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService 
{
  user_url = `https://randomuser.me/api?results=20`;

  constructor(private http: HttpClient) { 
    this.getUser$(30);
  }

  getUser$(count?: number): Observable<any>{
    return this.http.get(this.user_url);
  }
  
}
