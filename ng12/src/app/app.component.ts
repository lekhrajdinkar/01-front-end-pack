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
  timer = 0;
  showHideSubject = new Subject<string>();

  constructor( private gSrv: GlobalService){
    this.gSrv.showHideSubject$.subscribe( v => this.showHide = v);
    //const timeFn = setInterval( () => {++this.timer; console.log(this.timer)}, 100)
  }

  links=[
    {url: 'http', text:'http'},
    {url: 'directive', text:'directive'}
  ]
}

@Injectable({providedIn:'root'})
export class GlobalService 
{
  showHideSubject$ = new Subject<string>();
  
  constructor(){
    setTimeout(() => {
      this.hide();
    }, 2000) }

  show(){
    this.showHideSubject$.next('block');
  }

  hide(){
    this.showHideSubject$.next('none');
  }
}
