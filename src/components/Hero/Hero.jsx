import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Syed'

  useEffect(() => {
    let charIndex = 0
    const typeWriter = () => {
      if (charIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex + 1))
        charIndex++
        setTimeout(typeWriter, 100)
      }
    }

    const timer = setTimeout(typeWriter, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleNavClick = (targetId) => {
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
      </div>
      <div className="hero-content">
        <p className="hero-subtitle">Hello, I'm</p>
        <h1 className="hero-title">{displayedText}</h1>
        <p className="hero-description">
          Software Engineer building things that actually work
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => handleNavClick('#projects')}
          >
            View My Work
            <span>→</span>
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => handleNavClick('#contact')}
          >
            Get In Touch
            <span>💬</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero