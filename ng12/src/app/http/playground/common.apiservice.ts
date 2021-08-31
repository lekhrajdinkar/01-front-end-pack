import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const print_cb = (d:any) =>console.log(d);

@Injectable({providedIn: 'root'})
class CommonApiService{

    constructor(private http: HttpClient){}

}