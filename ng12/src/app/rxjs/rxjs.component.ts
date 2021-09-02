import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent, Subscription, Observer, interval } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('btnEventObsr') btn!: ElementRef<any>;
  @ViewChild('inputEventObsr') input!: ElementRef<any>;
  
  Obs_1_click_evt!: Observable<any> ;
  Obs_2_input_evt!: Observable<any> ;
  Obs_3_syn_data_array!: Observable<string> ;
  Obs_4_interval = interval(1000);

  subs : Subscription[] = [];

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe())
  }

  ngAfterViewInit(): void {
    this.register_obs1();
    this.register_obs2();
    this.register_obs3();
    // this.register_obs4();  <<<<< HERE
    
  }

  // =======================Observables============
  register_obs1(){
    console.log(this.btn);
    this.Obs_1_click_evt = fromEvent(this.btn.nativeElement, 'click');

    const sub1= this.Obs_1_click_evt
    .pipe(
      debounceTime(1000),
      map( (evt: PointerEvent) => ({x: evt.clientX, y: evt.clientY}) ),
    )
    .subscribe(
      (points) => {console.log('Obs_1_click pointer coordinate: ', points)}
    )
    this.subs.push(sub1);
  }

  // ==============
  register_obs2(){
    console.log(this.btn);
    this.Obs_2_input_evt = fromEvent(this.input.nativeElement, 'input');

    const sub2 = this.Obs_2_input_evt
    .pipe(
     // map(evt => evt.target.value ),
      pluck('target', 'value' ),
      debounceTime(500),
      distinctUntilChanged(),
     // map(evt => evt.target.value ),
    )
    .subscribe(
      (value: string) => {console.log('>> Input text: ', value)}
    )
    this.subs.push(sub2);
  }

  // ==============
  obs3_data = ['data1', 'data2', 'data3', 'data4', 'data5'];
  register_obs3()
  {
    //Observer cb
    const obsvr_cb = (obsvr: Observer<string>) => { 
      this.obs3_data.forEach( d => obsvr.next(d));
      //obsvr.next(this.obs3_data);
      //obsvr.complete();
    };

    //create Observable
    this.Obs_3_syn_data_array =  Observable.create(obsvr_cb)
    .pipe(map(item => item+'__modified' ));
  }

  // ==============
  subscribe_obs3_s1()
  {
    const obsrvr1: Observer<any> = { 
      next: (value: string) => {console.log('>> Observer--1 : ', value)},
      error: (err: any) => {},
      complete: () => {}
    } 
    const sub3 = this.Obs_3_syn_data_array.subscribe(obsrvr1);
    this.subs.push(sub3);
  }

  subscribe_obs3_s2(){
    const sub3 = this.Obs_3_syn_data_array
    .subscribe(
      (value: string) => {console.log('>> Observer--2 : ', value)}
    )
    this.subs.push(sub3);
  }

  // ==============
  register_obs4(){
    const sub = this.Obs_4_interval
    .pipe(
      // throttleTime(2000)
      //debounceTime(2000),
    )
    .subscribe(
      (value: number) => {console.log(' -- interval --  ', value)}
    )
    this.subs.push(sub);
  }

}
