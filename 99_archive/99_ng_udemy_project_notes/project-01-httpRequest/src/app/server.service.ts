import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService 
{
  constructor(private http: Http) {}

  //PUT / POST
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.put('https://ng6-firebase-b6db1.firebaseio.com/proj3/servers.json',
      servers,
      {headers: headers});
  }

  //GET
  getServers() {
    return this.http.get('https://ng6-firebase-b6db1.firebaseio.com/proj3/servers.json')
      .map( //transform data
        (response: Response) => {
          console.log(response);
          const data = response.json(); // 1. Convert  into array
          console.log(typeof data);
          console.log(data);

          for (const server of data)  // 2. Add Prefix
            server.name = 'FIREBASE_' + server.name;
          
          return data;
        }
      )
      .catch( // Error handling
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  //Get - Not JSON file but just one new Entry value
  getAppName() {
    return this.http.get('https://ng6-firebase-b6db1.firebaseio.com/projectName')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
