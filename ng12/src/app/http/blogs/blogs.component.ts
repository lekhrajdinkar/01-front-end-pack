import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { blog1 } from '../data';
import { BlogsApiService } from './blogs.service';

const err_handler_comp = (err: any) => console.log(err);

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit 
{
  blogs: any[];
  constructor(private srv: BlogsApiService) {  this.blogs = [];}

  ngOnInit(): void {
    this.srv.store_http_blogs$.subscribe(data => {
      console.log(data);
      this.blogs = data;
      //if(data.length === 0 ) this.refresh();
    })
    
  }
  refresh(): void{
    this.srv.loadBlog$().subscribe(noop)
  }
  publish_post(): void{
    this.srv.postBlogs$(blog1).subscribe(noop)
  }

}
