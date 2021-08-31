import { Action, createSelector, Store } from "@ngrx/store";
import { blog1, blog2 } from "../http/data";

// 1. State
export interface AppState{
    http?: {
        users?: any;
        blogs?: any;
    }
}

let initial_state = {
    http:{
        blogs: [blog1, blog2]
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
 const select_fn_http = createSelector( appState, s=> s.http);
 const select_fn_users = createSelector( select_fn_http, s => s?.users);
 const select_fn_blogs = createSelector( select_fn_http, s => s?.blogs);

 export class AppStoreSelector{
     constructor(private appStr : Store){}
     store_http_users$ = this.appStr.select(select_fn_users);
     store_http_blogs$ = this.appStr.select(select_fn_blogs);
 }
