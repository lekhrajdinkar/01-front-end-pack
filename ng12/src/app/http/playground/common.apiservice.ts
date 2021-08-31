import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const print_cb = (d:any) =>console.log(d);

@Injectable({providedIn: 'root'})
class CommonApiService{

    constructor(private http: HttpClient){}

    getTimeZoneData(){
        const tz_django_api = 'https://py3-basic-django.herokuapp.com/tz/codes/?format=json';
        this.http.get(tz_django_api).subscribe(print_cb);
    }
}