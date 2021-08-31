import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiCall, rest_Call_list } from './api-list';



@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit 
{
  restCall : ApiCall[] = rest_Call_list;
  constructor( private http: HttpClient) { }

  backend_call(item: ApiCall)
  {
    switch(item.type){
      case 'GET': {
          this.http.get(item.url)
          .pipe( tap((res: any) => console.log(res)))
          .subscribe(noop);
          break;
      }

      case "POST": {
          break;
      }

      case "DELETE": {
          break;
      }
    }
  }

  ngOnInit(): void {}

}
