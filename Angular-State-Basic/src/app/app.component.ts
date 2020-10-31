import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppState } from 'src/store/app.state';
import { AppStore } from 'src/store/app.store';
import  * as CounterActions from '../store/counter.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-State-Basic';
  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}
