import { useEffect, useState } from 'react';
import { getRandomBreed } from '../services/breeds.js';

export function useDogBreed() {
    const [breed, setBreed] = useState();
    const [error, setError] = useState(null);

    const refreshBreed = async () => {
        try {
            const randomBreed = await getRandomBreed();
            setBreed(randomBreed);
        }catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
        }
        
    }
    
    useEffect(() => {
        //useEffect no puede ser una función async ni devolver una Promise directamente. Esto se debe a que React espera que la función pasada a useEffect devuelva una función de limpieza (cleanup) o undefined, pero no una Promise.
        async function fetchBreed() {
            try {
                refreshBreed();                
            }catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        }
        fetchBreed();
    }, []);

    return { breed, refreshBreed, error };
}