import { Directive, HostBinding, HostListener } from '@angular/core';

const console_style ="color:green; font-size:large; border: 2px solid green;box-shadow: 0 0 10px #777; padding:10px";

//=====================
//purpose: appearance
//=====================
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') bgCol = 'transparent';

  @HostListener('mouseenter', ['$event', 'arg2'])
  onMouseEnter(e: any, b:any){
    console.log('%c mouse in', console_style , b, e);
    this.bgCol = 'rgb(225, 247, 183)'
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e: any){
    console.log('%c mouse leave', 'color:red; font-size:large', e);
    this.bgCol = 'transparent'
  }

}
