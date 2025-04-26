const URL_DOGS_CEO = 'https://dog.ceo/api'

//forma de hacerlo con promesas, se debe retornar la promesa para que el componente pueda manejar el estado de carga y error
export function getRandomImage(breed) {
    return fetch(`${URL_DOGS_CEO}/breed/${breed}/images/random`)
    .then((response) => response.json())
    .then((data) => {
        if(data.status !== 'success') throw new Error('Failed to fetch data from API IMAGES');            
        console.log('Random breed image:', data.message);
        return data.message;
    })
    .catch((error) => {
        throw error
    });
}