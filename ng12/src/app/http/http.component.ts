import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit
{
  // @Input() theme_text_color: string = 'black';
  // @Input() theme_bg_color: string = 'whitesmoke';
  
  links=[
    {url: '', text:'BACK', color: 'black'},
    {url: 'user', text:'user-profile', color: 'black'},
    {url: 'blogs', text:'Blogs', color: 'black'},
    {url: 'playground', text:'playground', color: 'blue'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
