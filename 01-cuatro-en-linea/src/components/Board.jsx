import { Square } from "./Square";

export const Board = ({ board, updateBoard }) => {
    return (
        <section className="game">
        {board.map((square, index) => {
            return (
            <Square
                key={index}
                index={index}
                // se pasa la funcion y no la ejecución de la fn 
                // para que no se ejecute todas las veces que se renderiza el board
                updateBoard={updateBoard}
            >
                {square}
            </Square>
            );
        })}
        </section>
    );
}