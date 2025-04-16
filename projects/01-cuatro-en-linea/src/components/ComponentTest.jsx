import { useState, useEffect, use } from "react"

export const ComponentTest = () => {
    // useState es un hook que permite crear un estado en un componente funcional, que al cambiar
    // vuelve a renderizar el componente, es una forma de manejar el estado en React
    const [value, setValue] = useState(false);
    // useEffect es un hook que nos permite ejecutar codigo arbitrario en diferentes
    // momentos del ciclo de vida del componente. Es decir, cuando se monta la primera vez y cada vez
    // que las depedencias que nosotros le indiquemos cambien. Como mimino se ejecuta una vez
    // al montar el componente. Se puede usar para ejecutar efectos secundarios, como peticiones a una API,
    // useEffect(codeToExecute, listOfDependencies);
    useEffect(() => {
        // Se ejecuta como minimo una vez al montar el componente
        console.log('usseEffect ejecutado');
    }, []); // [] significa que solo se ejecuta una vez al montar el componente, si no se pone, se ejecuta cada vez que cambia el estado del componente

    return (
        <div className="App">
            <h1>Componente de prueba</h1>
            <button onClick={() => setValue(!value)}>Cambiar valor</button>
            <p>{value ? 'El valor es verdadero' : 'El valor es falso'}</p>
        </div>
    )
}