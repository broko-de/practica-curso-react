import { WINNER_COMBOS } from '../constants.js'

// Funcion para verificar si hay un ganador
export const checkWinnerFrom = (boardToCheck) => {
  // Se recorre cada combinacion ganadora, para ver si X o O ha ganado
  for (const combo of WINNER_COMBOS) {
    const [a, b, c, d] = combo;
    // Se comprueba si hay un ganador
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c] &&
      boardToCheck[a] === boardToCheck[d]
    ) {
      return boardToCheck[a];
    }
  }
  // Si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
    // Si todas las celdas tienen un valor distinto de null, el juego termina
    return newBoard.every((square) => square !== null);
}
