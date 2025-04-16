import { useState, useEffect, use } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { Board } from "./components/Board";
import { WinnerModal } from "./components/WinnerModal";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { saveGameToStorage, resteGameStorage, getBoardStorage, getTurnStorage } from "./logic/storage";
import "./App.css";




function App() {
  console.log("Render App");
  // ❌ Si inicializaria boardFromStorage desde aqui, se ejecutaria cada vez que se renderiza el componente, es lento, bloquea el renderizado y no es necesario
  // const boardFromStorage = window.localStorage.getItem('board');

  //Estado para el tablero con 16 celdas, se inicializa
  // Los hooks no pueden ser llamados dentro de condicionales, bucles o funciones
  const [board, setBoard] = useState(
    // Se utiliza una fn para inicializar el estado
    // Se obtiene el tablero del localStorage, si no existe se inicializa con 16 celdas vacias
    () => {
      console.log('Se inicializa el tablero');
      return getBoardStorage();
      // const boardFromStorage = window.localStorage.getItem('board');
      // return boardFromStorage ? JSON.parse(boardFromStorage) : Array(16).fill(null);
    }
  );

  // Estado para el jugador actual, se inicializa en 'X'
  const [turn, setTurn] = useState(()=>{
    console.log('Se inicializa el turno');
    return getTurnStorage();
    // const turnFromStorage = window.localStorage.getItem('turn');
    // return turnFromStorage ?? TURNS.X; 
  });

  // Estado para el ganador, se inicializa en null
  const [winner, setWinner] = useState(null);


  // Funcion mas importante del juego, se pasa desde el componente padre al componente hijo para que la ejecute
  const updateBoard = (index) => {
    // Si la celda ya tiene un valor, no se puede modificar
    if (board[index] || winner) return; 
    /*
      ❌ No se puede modificar el tablero directamente, board[index] = turn
      Se lo debe considerar como algo inmutable a los estados, por lo que se debe crear una copia
    */
    // Se tendra un nuevo tablero - haciendo una copia del actual
    const newBoard = [...board]; //spread y rest operator
    // Se actualiza el tablero con el turno actual X o O
    newBoard[index] = turn; 
    // Se actualiza el estado del tablero, es fundamental usar la funcion setBoard 
    setBoard(newBoard); // actualizacion asincrona

    //Se actualiza nuevo turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Se guarda el nuevo tablero y el nuevo turno en el localStorage
    // saveGameToStorage({'board':newBoard, 'turn':newTurn});    

    // Se envia el nuevo tablero para verificar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti(); 
      // las actualizacion de estados son asincronas - no bloquea la ejecucion del codigo posterior
      setWinner(newWinner); 
      /*
      Otra forma para actualizar el estado es por medio de una fn callback
      donde se puede recuperar el estado anterior, pero debe retornar el nuevo estado
      de igual manera es asincrono
      setWinner((prevWinner) => {
        // Se muestra el ganador en la consola
        console.log(`Ganador: ${newWinner}, el anterior ganador fue: ${prevWinner}`);
        return newWinner;
      })
      */
    }else if (checkEndGame(newBoard)) {
      // Si no hay ganador y el tablero esta lleno, es un empate
      setWinner(false);
    }
  }

  // Fn para reiniciar el juego, reseteando los estados
  const resetGame = () => {
    setBoard(Array(16).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resteGameStorage();
  }

  useEffect(() => {
    console.log('Prueba de useEffect');
  }, [winner]) // ejecutar cuando el componente se monta por primera vez. Si paso [turn, board, winner] se ejecuta cada vez que cambia el estado de turn, board o winner

  // Se guarda en el storage cada vez que se actualiza el turno o el tablero
  useEffect(() => {
    saveGameToStorage({
      'board':board, 
      'turn':turn
    });
  }, [turn, board]) 


  return (
    <main className="board">
      <h1>Cuatro en linea</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>
      <Board
        board={board} 
        updateBoard={updateBoard}
      ></Board>
      
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
