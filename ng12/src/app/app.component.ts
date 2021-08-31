import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 12';
  showHide = 'block';
  message_style: any = { transform: 'translateX(-100%)' }
  message = '';

  constructor( private gSrv: GlobalService){
    this.gSrv.showHideSubject$.subscribe( v => this.showHide = v);
    this.gSrv.messageSubject$.subscribe( v => {
      this.message = v.text;
      if(v.type === 'ERROR'){
        this.message_style = {transform: 'translateX(0%)', backgroundColor: 'rgb(223, 142, 152)' }
      }
      if(v.type === 'ALERT'){
        this.message_style = {transform: 'translateX(0%)', backgroundColor: 'rgb(199, 233, 241)' }
      }
    });
  }

  links=[
    {url: 'http', text:'http'},
    {url: 'directive', text:'directive'}
  ]
}




@Injectable({providedIn:'root'})
export class GlobalService 
{
  constructor(){
    setTimeout(() => {
      this.hide();
      this.showMessage({text:'Welcome to Angular 12 webApp', type:'ALERT'})
    }, 2000) 
  }

  // Spinner Service
  showHideSubject$ = new Subject<string>();
  show(){ this.showHideSubject$.next('block'); }
  hide(){ this.showHideSubject$.next('none'); }

  // Message Service
  messageSubject$ = new Subject<{text: string, type: string}>();
  showMessage(msg: {text: string, type: string}){ this.messageSubject$.next(msg); }
}
