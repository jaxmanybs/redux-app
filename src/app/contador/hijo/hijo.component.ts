import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import *  as Actions from '../contador.actions';
// import { DIVIDIR, MULTIPLICAR } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() contador = 0;
  @Output() cambioContador = new EventEmitter<number>();

  contador$: Observable<number>;

  constructor(private store: Store<AppState>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.contador$ = store.select('contador');
  }

  ngOnInit(): void {
  }

  multiplicar() {
    this.store.dispatch(Actions.MULTIPLICAR({ multi: 2 }));

    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.store.dispatch(Actions.DIVIDIR({ multi: 2, div: 4 }));

    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);

  }

  // resetNieto(nuevoContador: number) {
  //   this.contador = nuevoContador;
  //   this.cambioContador.emit(this.contador);
  // }
}
