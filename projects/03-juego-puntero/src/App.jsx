import { useEffect, useState } from 'react'
import './App.css'
import { Target } from './components/Target'
import { FollowMouse } from './components/FollowMouse'
import { generateRandomPosition } from './utils/generateRandomPosition'

function App() {
  const [score, setScore] = useState(0)
  const [enabled, setEnabled] = useState(false)
  const [positionTarget, setPositionTarget] = useState({ x: 0, y: 0 })

  const initGame = () => {
    // Cambiar el estado de score a 0
    setScore(0)
    setEnabled(true)
    // Cambiar el estado de enabled a true
    // setEnabled(true)
  }

  const resetGame = () => {
    setScore(0)
    setEnabled(false)
  }

  const addScore = () => {
    // Cambiar el estado de score a score + 1
    const newScore = score + 1
    setScore(newScore)
    // setScore((prevScore) => prevScore + 1)
  }


  useEffect(() => {
    const randomPosition = generateRandomPosition()
    setPositionTarget(randomPosition)
  }, [score])

  useEffect(() => {
    if (enabled) {
      const interval = setInterval(() => {
        const randomPosition = generateRandomPosition();
        setPositionTarget(randomPosition);
      }, 1000); // Cambia la posición cada 1 segundo
  
      return () => clearInterval(interval); // Limpia el intervalo al deshabilitar el juego
    }
  }, [enabled]);

  return (
    <>
      {!enabled ? (
        <button onClick={initGame}>Iniciar juego</button>
      ):(
        <>
          <Target 
            position={positionTarget}
            onScore= {addScore}
          />
          <div className='score'>Score: {score}</div>
          <button onClick={resetGame}>Reiniciar juego</button>
          <FollowMouse 
            enabled={enabled} 
            positionTarget={positionTarget}
            onScore={addScore}
          />
        </>
      )}
    </>
  )
}

export default App
