import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CanCompExit } from '../gaurd';

@Component({
  selector: '[app-child-comp]',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit , OnDestroy
{

  @HostBinding('style.backgroundColor') bgCol = 'rgb(225, 247, 183)';
  
  user = {id: 1, name: 'XXXXX'};

  data!: any;
  fragment!: any;
  queryParams!: any;
  params!: any;

  subs: Subscription[] = [];

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { this.getSnapShotWhileRouting();}

 

  ngOnDestroy(): void {
   this.subs.forEach(s=>s.unsubscribe());
  }


  ngOnInit(): void{
    
    this.subscribeRoutingData();
  }

  getSnapShotWhileRouting(){
        //1. get fragment
        this.fragment = this.activedRoute.snapshot.fragment;
        console.log('Fragment',this.fragment);
    
        //2. get qp
        this.queryParams = this.activedRoute.snapshot.queryParams;
        console.log('queryParams',this.queryParams );
    
        //3. get data (static data)
        this.data = this.activedRoute.snapshot.data;
        console.log( 'data',this.data);

        //3. get path param
        this.params = this.activedRoute.snapshot.params;
        console.log( 'path params',this.data);
  }

  subscribeRoutingData(){
    //1. get fragment
    let sub = this.activedRoute.fragment
    .subscribe( d=>{
      console.log('OBS:: fragment',d);
      this.fragment = d;
    });
    this.subs.push(sub);
    

    //2. get qp
    sub = this.activedRoute.queryParams
    .subscribe( d=> {
      console.log('OBS:: queryParams',d)
      this.queryParams = d;
    });
    this.subs.push(sub);

    //3. get data (resolver data /static data)
    sub = this.activedRoute.data
    .subscribe( d=> 
      {console.log('OBS:: data',d);
      this.data = d;
    });
    this.subs.push(sub);

    //3. get path params)
    sub = this.activedRoute.params
    .subscribe( d=>
      {console.log('OBS:: Path Params',d);
      this.params = d;
      this.user = {id: d['id'], name:d['name']}
    });
    this.subs.push(sub);
}

}
