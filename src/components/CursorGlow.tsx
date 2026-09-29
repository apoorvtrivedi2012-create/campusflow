import { useEffect, useState } from 'react'

function CursorGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="cf-cursor-glow"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}

export default CursorGlow