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
export class RxjsComponent implements OnInit
{
  ngOnInit(): void {}
  links = ['basic', 'combinator', 'transform']
}
