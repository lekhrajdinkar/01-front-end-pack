import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../http/user/user-api.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  user_api_url = this.userSrv.user_url;
  constructor( private userSrv: UserApiService) { }

  ngOnInit(): void {
  }

}
