import { Component, OnDestroy, OnInit } from '@angular/core';
import { noop, Subscription } from 'rxjs';
import { Blog } from 'src/app/model';
//import { AppStoreSelector } from 'src/app/reducers/redux';
import { blog1 } from '../data';
import { BlogsApiService } from './blogs.service';

const err_handler_comp = (err: any) => console.log(err);


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy 
{
  blogs: Blog[] = [];
  subs: Subscription[] = [];
  data_cb = (blogs:Blog[]) => this.blogs = blogs;
  constructor(private srv: BlogsApiService, 
    // private storeSelector: AppStoreSelector 
    ) { }

  ngOnInit(): void {
    // const subs_1 = this.storeSelector.store_all$
    //   .subscribe(s => { 
    //     console.log('all state',s);  
    //     this.blogs = s.http.blogs;
    // });
  }

  refresh(): void{
    //const subs= this.srv.loadBlog$().subscribe(noop);
    const subs= this.srv.loadBlog$().subscribe(this.data_cb)
    this.subs.push(subs);
  }
  publish_post(): void{
    this.srv.postBlogs$(blog1).subscribe(noop)
  }

  ngOnDestroy(): void {
    this.subs.forEach(subs => subs.unsubscribe());
  }

}
