import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, ErrorPageComponent, WelcomeComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './http/user/user.component';
import { BlogsComponent } from './http/blogs/blogs.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PlaygroundComponent } from './http/playground/playground.component';
import { GlobalErrorHandler, HttpInterceptorModifyResponse, HttpInterceptorPrint, HttpInterceptorToken }
 from './http/http-interceptor-token';
 import{ GlobalService} from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TdFormComponent } from './form/td-form/td-form.component';
import { HighlightDirective } from './directives/appearance.directive';
import { CustomInputComponent } from './form/custom-input/custom-input.component';
import { RoutingComponent } from './routing/routing.component';
import { ChildCompComponent } from './routing/child-comp/child-comp.component';
import { holdableDirective } from './directives/behaviour.directive';
import { ShowOneContainorDir, ShowOneDir, ShowOneLinkDir } from './directives/tab.directive';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe, ShortenPipe } from './pipe/custom.pipe';
import { TestingComponent } from './testing/testing.component';
import { PlaceHolderDirective } from './directives/place.holder.dir';
import { TransformComponent } from './rxjs/transform/transform.component';
import { BasicComponent } from './rxjs/basic/basic.component';

@NgModule({
  declarations: [
    AppComponent, ErrorPageComponent, WelcomeComponent,
    HttpComponent,
    UserComponent,
    BlogsComponent,
    PlaygroundComponent,
    RxjsComponent,
    ReactiveFormComponent,
    TdFormComponent,
    CustomInputComponent,
    RoutingComponent,
    ChildCompComponent

    ,HighlightDirective, holdableDirective,PlaceHolderDirective,
    ShowOneContainorDir, ShowOneDir, ShowOneLinkDir, PipeComponent

    ,ShortenPipe, FilterPipe, TestingComponent, TransformComponent, BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, ReactiveFormsModule, 
    StoreModule.forRoot(reducers, {metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
              {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorPrint,multi: true },
              {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorToken,multi: true },
              {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorModifyResponse, deps: [GlobalErrorHandler, GlobalService],multi: true }
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
