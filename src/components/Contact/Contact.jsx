import { useState, useEffect, useRef } from 'react'
import './Contact.css'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const contactRef = useRef(null)

  const contactLinks = [
    {
      href: 'mailto:syed@example.com',
      icon: '✉️',
      title: 'Email'
    },
    {
      href: 'https://github.com',
      icon: '🐙',
      title: 'GitHub'
    },
    {
      href: 'https://linkedin.com',
      icon: '💼',
      title: 'LinkedIn'
    },
    {
      href: 'https://twitter.com',
      icon: '🐦',
      title: 'Twitter'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (contactRef.current) observer.observe(contactRef.current)

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current)
    }
  }, [])

  const handleLinkHover = (e) => {
    e.currentTarget.style.animation = 'pulse 0.5s ease'
  }

  const handleAnimationEnd = (e) => {
    e.currentTarget.style.animation = ''
  }

  return (
    <section 
      id="contact" 
      className={`contact fade-in ${isVisible ? 'visible' : ''}`}
      ref={contactRef}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-content">
          <p className="contact-description">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="contact-link"
                title={link.title}
                onMouseEnter={handleLinkHover}
                onAnimationEnd={handleAnimationEnd}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <a 
            href="mailto:syed@example.com" 
            className="btn btn-primary"
            onMouseEnter={handleLinkHover}
            onAnimationEnd={handleAnimationEnd}
          >
            Send Message
            <span>✉️</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact