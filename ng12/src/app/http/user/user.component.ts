import { Component, Input, OnInit } from '@angular/core';
import { UserApiService } from './user-api.service';
import {pipe} from 'rxjs' ;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit 
{
  // @Input() theme_text_color: string = 'black';
  // @Input() theme_bg_color: string = 'whitesmoke';

  users :any[] = [];
  constructor(private userSrv: UserApiService) { }
  
  ngOnInit(): void {
    this.userSrv.getUser$()
    //.pipe(map)
    .subscribe(
      res=> {
        this.users = res.results;
        console.log(this.users)
      });
  }

}
