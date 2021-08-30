import { Component, OnInit } from '@angular/core';
import { UserApiService } from './user-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit 
{
  user :any[] = []
  constructor(private userSrv: UserApiService) { }
  
  ngOnInit(): void {
    this.userSrv.getUser$
  }

}
