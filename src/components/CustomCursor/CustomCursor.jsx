import { useState, useEffect } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 768) return // Don't show on mobile

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      
      setTimeout(() => {
        setFollowerPos({ x: e.clientX, y: e.clientY })
      }, 100)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', handleMouseMove)
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .contact-link')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (window.innerWidth <= 768) return null

  return (
    <>
      <div 
        className={`cursor ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />
      <div 
        className={`cursor-follower ${isHovering ? 'cursor-follower-hover' : ''}`}
        style={{
          left: followerPos.x,
          top: followerPos.y,
        }}
      />
    </>
  )
}

export default CustomCursor