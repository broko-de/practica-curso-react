const URL_BREADS = 'https://dog.ceo/api/breeds/list/all';

export async function getRandomBreed(){
    const response = await fetch(URL_BREADS);
    const data = await response.json();
    if(data.status !== 'success') throw new Error('Failed to fetch data from API BREEDS');            
    const breeds = data.message;
    //Se obtiene una lista de razas de perros a partir del objeto de razas
    const breedsArray = Object.keys(breeds).map((key) => {
        return key;
    });
    //Se obtiene una raza aleatoria de la lista de razas
    const randomBreed = breedsArray[Math.floor(Math.random() * breedsArray.length)];
    console.log('Random breed:', randomBreed);
    return randomBreed;
}