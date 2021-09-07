import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanCompExit } from './gaurd';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit, CanCompExit {

   //CanDeActivate
   deActivate = () => {
    return this.users.length < 4 ? false: true;
   };

  users: any[] = [
    {id:1, name: 'Anna'},
    {id:2, name: 'Tony'},
    {id:3, name: 'Thomas'},
    {id:4, name: 'Jeni'}
  ];

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  holdTime = 2000;
  pop = (e: number) => { 
    console.log(e); 
    if(e >= this.holdTime/100) 
      this.users.pop()
  };

  getTime(t: number){ console.log(t)}
  showDetails(u:any){
    this.router.navigate([u.id, u.name], 
      {
      relativeTo: this.activedRoute,
      queryParams: {active:'y', country:'IND'},
      fragment: 'fragment--1',
    });
  }

}
