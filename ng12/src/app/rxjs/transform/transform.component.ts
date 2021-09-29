import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { buffer, bufferCount, bufferTime, take, takeUntil, tap, map, toArray } from 'rxjs/operators';

const p =( d:any)=>console.log(d);

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.scss']
})
export class TransformComponent implements OnInit, AfterViewInit {

  buffer$!: Observable<any>; @ViewChild('bufferBtn')btn_buffer!: ElementRef<any>;
  bufferCount$!: Observable<any>;  @ViewChild('bufferCountBtn')btn_bufferCount!: ElementRef<any>;
  bufferTime$!: Observable<any>; @ViewChild('bufferCountTime')btn_bufferTime!: ElementRef<any>;
  
  map$!: Observable<any>; @ViewChild('bufferCountTime')btn_map!: ElementRef<any>;  

  constructor() { }
  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  // 1 buffer
  buffer_test(){
    const clicks$ = fromEvent(this.btn_buffer.nativeElement, 'click');
    this.buffer$ = interval(1000).pipe( 
      tap(p)
      ,takeUntil(clicks$ ) //comment me and check
      ,buffer( clicks$ ) 
       
    )
  }
  //2 BufferCount
  bufferCount_test(){
    const clicks$ = fromEvent(this.btn_bufferCount.nativeElement, 'click');
    this.bufferCount$ = interval(1000).pipe( 
      map(n=> "item"+n)
      ,tap(p)
      ,takeUntil(clicks$ )
      ,bufferCount( 5 )
      //, toArray() 
    )
  }

  //3 BufferTime
  bufferTime_test(){
    const clicks$ = fromEvent(this.btn_bufferTime.nativeElement, 'click');
    this.bufferTime$ = interval(1000).pipe( 
      tap(p)
      ,takeUntil(clicks$ )
      ,bufferTime(2000) 
    )
  }

  //4 map
  map_test(){
    const clicks$ = fromEvent(this.btn_map.nativeElement, 'click');
    this.map$ = interval(1000).pipe( 
      map(n=> "item"+n),tap(p) 
      ,takeUntil(clicks$ )
      ,bufferCount( 3 )
    )
  }


}


