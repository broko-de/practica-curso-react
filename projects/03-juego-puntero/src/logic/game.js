export const generateRandomPosition = () => {
    const targetSize = 10 // Tamaño del target
    const x = Math.floor(Math.random() * (window.innerWidth - targetSize))
    const y = Math.floor(Math.random() * (window.innerHeight - targetSize))
    return { x, y }
}