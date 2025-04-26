import { useState, useEffect } from 'react';
import { getRandomImage } from '../services/images.js';

// Creamos un custom hook para manejar la logica de la imagen
// es una buena practica separar la logica de la API en un custom hook
// y llamarlo desde el componente. Esto hace que el código sea más limpio y fácil de mantener.
// Además, se puede reutilizar el custom hook en otros lugares si es necesario.
export function useDogImage({ breed }) {
    const [image, setImage] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!breed) return;
        // forma de hacerlo con promesas
        getRandomImage(breed)
            .then((newImage) => {
                setImage(newImage);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error);
                setImage(null);
            });
    }, [breed]);

    // nuestro custom hook debe retornar el estado de la imagen
    // esto es lo que se denomina contrato del custom hook, que es lo que va a retornar
    return { image, error };
}