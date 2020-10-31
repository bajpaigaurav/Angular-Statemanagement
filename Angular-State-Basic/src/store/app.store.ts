import { InjectionToken } from '@angular/core';
import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';

import { AppState } from './app.state';
import {
  counterReducer as reducer
} from './counter.reducer';

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> =
  window['__REDUX_DEVTOOLS_EXTENSION__'] ?
  window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(
    reducer,
    compose(devtools)
  );
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];
