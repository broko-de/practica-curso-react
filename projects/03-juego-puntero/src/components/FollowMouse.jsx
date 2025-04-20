import { useEffect, useState } from 'react'

export const FollowMouse = ({enabled, positionTarget, onScore}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 }) //recomendacion inicializar el estado con el tipo de datos que vamos usar

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => { //cleanup method
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  
  useEffect(() => {
    //comparar la posicion del puntero con la posicion del target
    const distance = Math.sqrt(
      Math.pow(position.x - positionTarget.x, 2) +
      Math.pow(position.y - positionTarget.y, 2)
    )
    if (distance > 10 && distance < 40) {
      onScore()
      console.log('Has pasado por el  target')
    }
  }, [position])

  return (
    <>
      <div className='mouse-following' style={
        {
          transform: `translate(${position.x}px, ${position.y}px)`,
        }
      } />
    </>
  )
}