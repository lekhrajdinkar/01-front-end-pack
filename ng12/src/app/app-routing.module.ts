import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { UserComponent } from './http/user/user.component';

const routes: Routes = [
  // {path:'', component: AppComponent},
  {path:'http', component: HttpComponent, children:[ {path:'user', component: UserComponent} ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
