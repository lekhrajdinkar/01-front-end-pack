import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { BlogsApiService } from './blogs-api.service';

// data
let blog1 = {title:"javaSrcipt", desc: "Most powerful language to backup all modern UI frameworks"}
let blog2 = {title:"TypeScrcipt", desc: "Most powerful Compiler for JavaScrript"}
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
    this.srv.loadBlog$().subscribe( res => this.blogs = res, err_handler_comp);
  }

  publish_post(): void{
    this.srv.postBlogs$(blog1).subscribe(noop)
  }

}
