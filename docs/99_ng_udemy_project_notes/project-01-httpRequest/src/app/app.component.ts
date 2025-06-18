import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //Array to store Server List
  servers = [
    { name: 'Testserver', capacity: 10, id: this.generateId()},
    { name: 'Liveserver', capacity: 100, id: this.generateId()}
  ];

  constructor(private serverService: ServerService) {}

  //============================

  // 1. Save new servefr on array.
  onAddServer(name: string) { this.servers.push({name: name,capacity: 50,id: this.generateId()});}

  // 2. Make REST call to store server array on backend.
  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response: Response) => console.log(response),
        (error) => console.log(error)
      );
  }

  // 3. Get SERVER from backend - REST Get
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }

  // 3. Get SERVER from backend - REST Get
  onGetfbEntry() {
    this.serverService.getAppName()
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}

//-------------
/*

PUT Console:

Response {_body: "[{"capacity":10,"id":1738,"name":"Testserver"},{"capacity":100,"id":1606,"name":"Liveserver"}]", status: 200, ok: true, statusText: "OK", headers: Headers, …}
headers: Headers
_headers: Map(2) {"content-type" => Array(1), "cache-control" => Array(1)}
_normalizedNames: Map(2) {"content-type" => "content-type", "cache-control" => "cache-control"}
__proto__: Object
ok: true
status: 200
statusText: "OK"
type: 2
url: "https://ng6-firebase-b6db1.firebaseio.com/proj3/servers.json"
_body: "[{"capacity":10,"id":1738,"name":"Testserver"},{"capacity":100,"id":1606,"name":"Liveserver"}]"
__proto__: Body
constructor: ƒ Response(responseOptions)
toString: ƒ ()
__proto__: Object

*/
