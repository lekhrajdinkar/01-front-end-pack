import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 12';
  showHide = 'block';
  message_style: any = {}
  message_class: string[] = [];
  message = 'txt';

  constructor( private gSrv: GlobalService){
    this.gSrv.showHideSubject$.subscribe( v => this.showHide = v);
    this.gSrv.messageSubject$.subscribe( v => {
      this.message = v.text;
      this.message_class = ['display_msg'];
      if(v.type === 'ERROR'){
         //this.message_style = {transform: 'translateX(10%)', backgroundColor: 'rgb(223, 142, 152)' , color: 'red'}
          setTimeout( () => this.message_class = [...this.message_class,'global_message_error'] , 100);
      }
      if(v.type === 'ALERT'){
         //this.message_style = {transform: 'translateX(10%)', backgroundColor: 'rgb(199, 233, 241)', color: 'blue'}
         setTimeout( () => this.message_class = [...this.message_class,'global_message_alert'] , 100);
      }

      setTimeout( () => {this.message_class = [], this.message_style = {}}, 4000)
    });
  }

  links=[
    {url: 'http', text:'http'},
    {url: 'rxjs', text:'Reactive Programming'},
    
    {url: 'td-form', text:'TD Form'},
    {url: 'r-form', text:'Reactive Form'},

    {url: 'directive', text:'directive'},
    {url: 'pipe', text:'Pipe'},
    {url: 'routing', text:'routing'}
  ]
}




@Injectable({providedIn:'root'})
export class GlobalService 
{
  constructor(){
    setTimeout(() => {
      this.hide();
      this.showMessage({text:'Welcome to Angular 12 webApp', type:'ALERT'})
    }, 500) 
  }

  // Spinner Service
  showHideSubject$ = new Subject<string>();
  show(){ this.showHideSubject$.next('block'); }
  hide(){ this.showHideSubject$.next('none'); }

  // Message Service
  messageSubject$ = new Subject<{text: string, type: string}>();
  showMessage(msg: {text: string, type: string}){ this.messageSubject$.next(msg); }
}

@Component({
  selector: 'app-welcome-root',
  template: `
  <h1 style="text-align:center;margin:auto; color:green;"> WELCOME TO NG12 </h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class WelcomeComponent {
  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute
    ){}
}

@Component({
  selector: 'app-error-page-root',
  template: `<h1 style="margin:auto; color:red;" > {{err_msg}} ! </h1>`,
  styleUrls: ['./app.component.scss']
})
export class ErrorPageComponent {
  err_msg!: string;
  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute
    ){
      this.err_msg= this.activedRoute.snapshot.data['some_static_err_msg'];
    }
}
