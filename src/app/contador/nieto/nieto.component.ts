import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import * as Actions from '../contador.actions'

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input() contador = 0;
  @Output() cambioContador = new EventEmitter<number>();
  contador$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.contador$ = store.select('contador');
  }

  ngOnInit(): void {
  }

  reset() {
    this.store.dispatch(Actions.RESET());

    // this.contador = 0;
    // this.cambioContador.emit(this.contador);
  }
}
