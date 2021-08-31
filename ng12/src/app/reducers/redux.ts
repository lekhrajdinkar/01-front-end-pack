import { Injectable } from "@angular/core";
import { Action, createSelector, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { blog1, blog2 } from "../http/data";
import { Blog, User } from "../model";

// 1. State
export interface AppState{
    http: AppHttp
}
export interface AppHttp{ 
    users: User[];
    blogs: Blog[]; 
}

let initial_state: AppState = {
    http:{
        blogs: [blog1, blog2],
        users: [{name: 'unknown user'}]
    }
}

// 2. Action
export enum BlogActionTypes{ load = '[BLOGS] load'}

export class BlogLoadAction implements Action{
    readonly type = BlogActionTypes.load;
    constructor(private payload: any){}
}


// 3.reducer Function
export function appReducer( state: AppState = initial_state, actions: any): AppState{
    switch(actions.type){
        case BlogActionTypes.load : {
            return {...state, http: { ...state['http'], blogs: actions.payload}}
        }

        default: return state;
    }
}

// 4. selector
 const appState = (state: AppState) => state;
 
 const select_fn_app_state = createSelector( appState, (s: AppState) => s);
    const select_fn_http = createSelector( select_fn_app_state, (s: AppState) => s.http);
        const select_fn_users = createSelector( select_fn_http, (s: AppHttp) => s.users);
        const select_fn_blogs = createSelector( select_fn_http, (s: AppHttp) => s.blogs);
        
//  @Injectable({providedIn: 'root'})
//  export class AppStoreSelector
//  {
//     store_all$: Observable<AppState>;
//     store_http$: Observable<any>;
//     store_http_users$: Observable<any>;
//     store_http_blogs$: Observable<any>;

//      constructor(private store : Store){
//         this.store_all$ = this.store.select(select_fn_app_state);
//         this.store_http$ = this.store.select(select_fn_http);
//         this.store_http_users$ = this.store.select(select_fn_users);
//         this.store_http_blogs$ = this.store.select(select_fn_blogs);
//      }
// }
