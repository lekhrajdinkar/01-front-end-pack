import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogsApiService } from './http/blogs/blogs-api.service';
import { BlogsComponent } from './http/blogs/blogs.component';
import { HttpComponent } from './http/http.component';
import { UserComponent } from './http/user/user.component';

const routes: Routes = [
  {path:'http', component: HttpComponent, 
    children:[ 
      {path:'user', component: UserComponent},
      {path:'blogs', component: BlogsComponent}, 
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
