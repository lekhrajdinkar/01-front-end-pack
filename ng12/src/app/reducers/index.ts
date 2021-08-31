import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appReducer, AppState } from './redux';

export interface State {
    state: AppState
}

export const reducers: ActionReducerMap<State> = {
    state: appReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
