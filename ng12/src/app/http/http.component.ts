import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit
{
  links=[
    {url: 'user', text:'user-profile'},
    {url: '', text:'next'},
    {url: '', text:'next'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
