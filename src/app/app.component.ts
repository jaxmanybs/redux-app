import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from './contador/contador.actions';
// import { INCREMENTAR, DECREMENTAR, RESET } from './contador/contador.actions';
import { AppState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador$: Observable<number>;

  title = 'redux-app';
  // contador: number = 2;


  constructor(private store: Store<AppState>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.contador$ = store.select('contador');

    // store.select('contador').subscribe(state => {
    //   console.log(state);


    // this.contador = state.contador;
    // });

    // this.contador = 10;
  }

  incrementar() {

    // const accion = INCREMENTAR();

    // const accion: Action = {
    //   type: 'INCREMENTAR'
    // };
    // console.log(INCREMENTAR.type);


    this.store.dispatch(Actions.INCREMENTAR());
    // this.contador++;
  }

  decrementar() {

    // const accion = DECREMENTAR();
    // const accion: Action = {
    //   type: 'DECREMENTAR'
    // };

    this.store.dispatch(Actions.DECREMENTAR());

    // this.contador--;
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(Actions.RESET());
  }
}
