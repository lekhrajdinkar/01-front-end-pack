import { Injectable } from "@angular/core";
import { fromEvent, interval } from "rxjs";
import { buffer } from "rxjs/operators";

const cb =( d:any)=>console.log(d);

@Injectable({providedIn: 'root'})
class RxJsOperTransformSrv{
    constructor(){}

// A. Buffer related

    buffer_test(){
        const clicks$ = fromEvent(document, 'click');
        clicks$.pipe(
           buffer( interval(1000))
        ).subscribe(cb)
    }


}