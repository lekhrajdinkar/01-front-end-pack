// SUbject... special case of Observer, can call next. Event emitter.
// BehaviourSubject -has intial value
// ReplaySubject - buffers old values.
// AsynSubject : emit last value only when its is complete.
// Subject<void>, value does not matter.

import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent, Subscription, Observer, interval, of, from, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mergeMap, multicast, pluck, switchMap, tap, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('btnEventObsr') btn!: ElementRef<any>;

  @ViewChild('inputEventObsr1') input_1!: ElementRef<any>;

  //merge
  @ViewChild('inputEventObsr21') input_21!: ElementRef<any>;
  @ViewChild('inputEventObsr22') input_22!: ElementRef<any>;

  //switch
  @ViewChild('inputEventObsr31') input_31!: ElementRef<any>;
  @ViewChild('inputEventObsr32') input_32!: ElementRef<any>;
  
  Obs_1_click_evt!: Observable<any> ;
  Obs_1_input_evt!: Observable<any> ;

  Obs_21_input_evt!: Observable<string> ;
  Obs_22_input_evt!: Observable<string> ;

  Obs_31_input_evt!: Observable<string> ;
  Obs_32_input_evt!: Observable<string> ;

  Obs_3_syn_data_array!: Observable<string> ;
  Obs_4_interval :Observable<number>  = interval(1000);

  subs : Subscription[] = [];

  subject = new Subject<number>();
 

  constructor(private http: HttpClient) { 
    // const multicast_obs = from([1,2,4]).pipe(multicast(this.subject));
  }

  ngOnInit(): void { 
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe())
  }

  ngAfterViewInit(): void {
    this.register_obs1();
    this.register_obs2();
    this.register_obs3();
    this.register_mergemap_obs();
    this.register_switchmap_obs();
  }

  // =======================Observables============
  merge_map_data : any[] = [];
  merge_map_outer_o_data : any[] = [];
  merge_map_inner_o_data : Set<string> = new Set();

  register_mergemap_obs(){
    this.Obs_21_input_evt = fromEvent(this.input_21.nativeElement, 'input').pipe(pluck('target','value'));
    this.Obs_22_input_evt = fromEvent(this.input_22.nativeElement, 'input').pipe(pluck('target','value'));

    // mergemap take cb fn, which must return anothor obs
    // mergemap keeps all the data emitted by obs and then run cb for each of them
    // For every data released by outter obs, it will run get/subscribe data from inner obs
    // returns data emitted by inner obs
    this.Obs_21_input_evt
    .pipe( 
      tap( ood => this.merge_map_outer_o_data.push(ood)),
      tap( od => console.log(od)),
      mergeMap( v =>  this.Obs_22_input_evt
        .pipe(
          debounceTime(1000),
          tap( iod => this.merge_map_inner_o_data.add(iod)),
          map( i => v + " "+i)))
    )
    .subscribe( result => this.merge_map_data.push(result));

  }

  switch_map_data : any[] = [];
  switch_map_outer_o_data : any[] = [];
  switch_map_inner_o_data : Set<string> = new Set();

  register_switchmap_obs(){
    this.Obs_31_input_evt = fromEvent(this.input_31.nativeElement, 'input').pipe(pluck('target','value'));
    this.Obs_32_input_evt = fromEvent(this.input_32.nativeElement, 'input').pipe(pluck('target','value'));

    this.Obs_31_input_evt
    .pipe( 
      tap( od => console.log(od)),
      tap( ood => this.switch_map_outer_o_data.push(ood)),
      switchMap( v =>  { 
        console.log("mu code");
        return this.Obs_32_input_evt
        .pipe(
          debounceTime(1000),
          tap( ood => this.switch_map_inner_o_data.add(ood)),
          map( i => v + " "+i))}
          )
    )
    .subscribe( result => this.switch_map_data.push(result));
  }

  obs1_data :any[] = [];
  register_obs1(){
    console.log(this.btn);
    this.Obs_1_click_evt = fromEvent(this.btn.nativeElement, 'click');

    const sub1= this.Obs_1_click_evt
    .pipe(
      debounceTime(1000),
      map( (evt: PointerEvent) => ({x: evt.clientX, y: evt.clientY}) ),
    )
    .subscribe(
      (points) => {
        this.obs1_data.push(points);
        console.log('Obs_1_click pointer coordinate: ', points)}
    )
    this.subs.push(sub1);
  }

  // ==============
  obs2_data :string[] = [];
  register_obs2(){
    console.log(this.btn);
    this.Obs_1_input_evt = fromEvent(this.input_1.nativeElement, 'input');

    const sub2 = this.Obs_1_input_evt
    .pipe(
     // map(evt => evt.target.value ),
      pluck('target', 'value' ),
      debounceTime(500),
      distinctUntilChanged(),
     // map(evt => evt.target.value ),
    )
    .subscribe(
      (value: string) => {
        this.obs2_data.push(value);
        console.log('>> Input text: ', value)}
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
      obsvr.next('Last packet');
      obsvr.complete();
    };

    //create Observable
    this.Obs_3_syn_data_array =  Observable.create(obsvr_cb)
    .pipe(map(item => item+'__modified' ));

    //this.Obs_3_syn_data_array =  from(this.obs3_data);
  }

  // ==============
  obs3_obs1_data: string[] = [];
  subscribe_obs3_s1()
  {
    const obsrvr1: Observer<any> = { 
      next: (value: string) => {
        this.obs3_obs1_data.push(value);
        console.log('>> Observer--1 : ', value)
      },
      error: (err: any) => {},
      complete: () => {}
    } 
    const sub3 = this.Obs_3_syn_data_array
    //.pipe(debounceTime(500))
    .subscribe(obsrvr1);
    this.subs.push(sub3);
  }

  obs3_obs2_data: string[] = [];
  subscribe_obs3_s2(){
    const sub3 = this.Obs_3_syn_data_array
    .subscribe(
      (value: string) => {
        this.obs3_obs2_data.push(value);
        console.log('>> Observer--2 : ', value)
      }
    )
    this.subs.push(sub3);
  }

  // ==============
  obs4_data: number[] = []
  register_obs4(){
    const sub = this.Obs_4_interval
    .pipe(
      //throttleTime(2000)
      //debounceTime(100),
    )
    .subscribe(
      (value: number) => {this.obs4_data.push(value);
      if (value > 10) { sub.unsubscribe()}
     }
    )
    this.subs.push(sub);
  }

}
