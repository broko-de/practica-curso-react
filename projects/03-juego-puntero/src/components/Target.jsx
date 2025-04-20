export const Target = ({position,onScore}) => {

    const handleClick = () => {
      onScore()
    }
  
    return (
      <div 
        className='target'    
        role='button'
        aria-label='Target'  
        style={{
          left: position.x,
          top: position.y,
        }}
        onClick={handleClick}
      />
    )
  }