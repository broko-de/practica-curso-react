import { useState } from 'react';
import { useDogBreed } from './hooks/useDogBreed.js';
import { useDogImage } from './hooks/useDogImage.js';
import './App.css';


export default function App() {
    // llamamos al custom hook para obtener la raza de perro y la funcion para actualizarla
    const { breed, refreshBreed, error: breedError } = useDogBreed(); 
    // llamamos al custom hook y le pasamos la raza como argumento en forma de un objeto
    // para que el custom hook pueda ser extensible y recibir mas argumentos en el futuro - parametros nombrados
    const { image, error: imageError } = useDogImage({ breed }); 
    
    // unificamos el manejo de errores en una sola variable
    const error = breedError || imageError; 
    
    // llamamos al custom hook y le pasamos la raza como argumento en forma de un objeto
    
    
    const handleClick = async  () => {
        // setImage(null);
        // Una buena practica es separa r la logica de la API en una funcion diferente
        // y llamarla desde el evento onClick. Esto hace que el código sea más limpio y fácil de mantener.
        // Además, se puede reutilizar la función en otros lugares si es necesario.
        
        // actualiza la raza
        refreshBreed(); 
    }

    return (
        <main className='main-container'>
            <h1>React Fetch Data</h1>
            <p>Ejemplo de fetching de data, useState y useEfect con react</p>
            {error
                ? <p className='error'>Error: {error.message}</p> 
                : 
                (
                    <>
                        {breed && <p>Raza de perro: <span data-testid='breedSpan'>{breed}</span></p>}
                        {image ?( 
                            <img src={image} alt={`Imagen aleatoria de un perro de raza ${breed}`} />
                        ) : (
                            <p>Cargando imagen...</p>
                        )}            
                        <button onClick={handleClick} className='btn btn-primary'>Actualizar raza</button>
                    </>
                )
            }
            
        </main>
    );
}