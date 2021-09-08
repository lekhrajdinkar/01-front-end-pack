import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  locale_india = new Intl.DateTimeFormat('en-US');
  date1: Date = new Date();
  date_utc = new Date().toUTCString();
  chicago_datetime_str = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
  constructor() { 
    this.locale_india.format(this.date1);
  }
  ngOnInit(): void { }

  
  
  

  // 1. Shorthen Pipe
  text_shorten ='' 
  len_shorten = 0
  
  // 2. Filter Pipe
  text:string = '';
  servers = ['s6','s4','s4','s3','s2','s1']
  add(){ this.servers.push('s11'); }

}
