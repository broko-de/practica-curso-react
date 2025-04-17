import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode es una herramienta de desarrollo que ayuda a detectar
  // problemas potenciales en la aplicación
  // No afecta el comportamiento de la aplicación en producción
  // Se ejecuta dos veces el efecto, para detectar efectos secundarios
  // No se recomienda usar en producción
  // StrictMode no afecta el rendimiento de la aplicación
  <StrictMode>
    <App />
  </StrictMode>,
)
