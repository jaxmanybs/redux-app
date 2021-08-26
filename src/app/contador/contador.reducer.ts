import { Action, props } from '@ngrx/store';

import { createReducer, on } from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR, RESET, MULTIPLICAR, DIVIDIR } from './contador.actions';

export const initialState = 10;

const multi = 2;

const _contadorReducer = createReducer(
  initialState,
  on(INCREMENTAR, (state) => state + 1),
  on(DECREMENTAR, (state) => state - 1),
  on(MULTIPLICAR, (state, props) => state * props.multi),
  on(DIVIDIR, (state, props) => state / props.div),
  on(RESET, (state) => 0)
);

export function contadorReducer(state: number = initialState, action: Action) {

  // switch (action.type) {

  //   case INCREMENTAR.type:
  //     return state + 1;

  //   case DECREMENTAR.type:
  //     return state - 1;

  //   case RESET.type:
  //     return 0;

  //   default:
  //     return state;
  // }


  return _contadorReducer(state, action);
}
