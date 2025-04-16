/**
 * @description Componente Square para cada celda del tablero
 * @param {isSelected} boolean saber si la celda es seleccionada
 * @param { updateBoard } function para actualizar el tablero
 * @param { index } number posicion de la celda
 * @param { children } string valor de la celda
 * @returns 
 */
export const Square = ({ children,isSelected, updateBoard, index,  }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  // Se ejecuta la función updateBoard que es pasada como parametro al hacer click en la celda
  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
