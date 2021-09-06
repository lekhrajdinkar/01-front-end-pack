import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent, ErrorPageComponent, WelcomeComponent } from './app.component';
import { BlogsApiService } from './http/blogs/blogs.service';
import { BlogsComponent } from './http/blogs/blogs.component';
import { HttpComponent } from './http/http.component';
import { UserComponent } from './http/user/user.component';
import { PlaygroundComponent } from './http/playground/playground.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TdFormComponent } from './form/td-form/td-form.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'td-form', component: TdFormComponent},
  {path:'r-form', component: ReactiveFormComponent},
  {path:'rxjs', component: RxjsComponent},
  {path:'http', component: HttpComponent, 
    children:[ 
      {path:'user', component: UserComponent},
      {path:'blogs', component: BlogsComponent}, 
      {path:'playground', component: PlaygroundComponent},
    ]},
    {path:'**', component: ErrorPageComponent, data:{some_static_err_msg: 'Something went Wrong !'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
