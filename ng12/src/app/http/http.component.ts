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
    {url: 'user', text:'user-profile', color: 'red'},
    {url: 'blogs', text:'Blogs', color: 'black'},
    {url: '', text:'next', color: 'green'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
