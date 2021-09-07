import { Directive, HostBinding, HostListener, Input, Output } from '@angular/core';
import { interval, Observable, of, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const console_style_1 ="color:green; font-size:large; border: 2px solid green;box-shadow: 0 0 10px #777; padding:10px";
const console_style_2 ="color:red; font-size:large; border: 2px solid green;box-shadow: 0 0 10px #777; padding:10px";

//=============================
// Behaviour: Emit data
//=============================
@Directive({
  selector: '[holdable]'
})
export class holdableDirective 
{
  @Input() holdTime!: number;
  @Output('holdTimeEvent') holdEvent = new Subject<number>();
  cancel$ = new Subject<string>();
  sub!: Subscription;

  constructor() { }

  holdTime$ = interval(100).pipe( takeUntil(this.cancel$) )

  @HostBinding('style.backgroundColor') bgCol = 'rgb(225, 247, 183)';

  @HostListener('mousedown', ['$event'])
  onMouseEnter(e: any){
    console.log('%c Mouse HOLD DOWN', console_style_1 , e);
    this.sub = this.holdTime$.subscribe( t => {
      this.holdEvent.next(t) ;
      if (t >= (this.holdTime/100) ) {
        this.sub.unsubscribe(); 
        this.holdEvent.next(0)
      }
    });
  }

  @HostListener('mouseup', ['$event'])
  onMouseLeave(e: any){
    console.log('%c Mouse Lifted UP', console_style_2, e);
    this.cancel$.next('cancel');
    this.holdEvent.next(0);
    this.sub.unsubscribe();
  } 
  
}
