import { createAction, props } from '@ngrx/store';

export const INCREMENTAR = createAction('[Contador Component] Incrementar');
export const DECREMENTAR = createAction('[Contador Component] Decrementar');
export const MULTIPLICAR = createAction('[Contador Component] Multiplicar',
  props<{ multi: number }>());
export const DIVIDIR = createAction('[Contador Component] Dividir',
  props<{ div: number, multi: number }>());
export const RESET = createAction('[Contador Component] Reset');

// export type actions = INCREMENTAR | DECREMENTAR | MULTIPLICAR | DIVIDIR | RESET;
