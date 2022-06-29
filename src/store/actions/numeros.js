import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "./actionTypes";

export function changeMin(novoNumero) {
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNumero,
  };
}
export function changeMax(novoNumero) {
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNumero,
  };
}
