import { TURNS } from "../../constants";

export const saveGameToStorage = (board, turn) => {
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);
}

export const resteGameStorage = () => {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
}

export const getBoardStorage = () => {
  return JSON.parse(window.localStorage.getItem('board')) || Array(16).fill(null);
}

export const getTurnStorage = () => {
  return window.localStorage.getItem('turn') || TURNS.X; // si no existe, se inicializa en X
}