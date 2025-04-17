import { useState, useEffect } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 }) //recomendacion inicializar el estado con el tipo de datos que vamos usar

  // con addEventListener se puede suscribir a eventos del DOM, pero se ejecuta
  // cada vez que se renderiza el componente, por lo que se debe usar useEffect
  // Efecto que ejecuta cuando, se monta y el estado enabled cambia
  useEffect(() => {
    console.log('Efecto 1', { enabled })

    // Se crea una función que se ejecuta cuando se detecta que el puntero se mueveº
    const handleMove = (e) => {
      const { clientX, clientY } = e
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    // Si el puntero está habilitado, se suscribe al evento pointermove, asociandole una funcion
    if (enabled) {
      // si no limpio la suscripcion luego, se van acumulando los eventos
      // y se ejecuta varias veces la misma funcion
      window.addEventListener('pointermove', handleMove)
    }

    // Hay que limpiar el efecto, para evitar que se ejecute varias veces,
    // se puede hacer con el return de la función del useEffect
    // Se ejecuta cuando el componente se desmonta o cuando cambia el estado enabled(dependencias)
    return () => { //cleanup method
      console.log('Limpiando efecto')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // cambiar className del body -> puedo tener varios efectos relacionados a una misma dependencia
  // en este caso, el efecto se ejecuta cuando el componente se monta y cuando cambia el estado enabled
  useEffect(() => {
    console.log('Efecto 2', { enabled })
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      console.log('Limpiando efecto 2')
      document.body.classList.remove('no-cursor')
      // se limpia el efecto, para evitar que se ejecute varias veces,
    }
  }, [enabled])

  return (
    <>
      <div style={
        {
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }
      } />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}
function App() {
  const [mounted, setMounted] = useState(false)

  return (
    <main>
      <h1>Mouse Follower</h1>
      <p>Ejemplo de seguimiento del puntero del ratón</p>
      {mounted && <FollowMouse />}
      <p>El puntero se sigue al mover el ratón</p>
      <button onClick={()=>{setMounted(!mounted)}}>Toogle mounted FollowMouse component</button>
    </main>
  )
}

export default App
