import { useState, useEffect, useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const projectsRef = useRef(null)

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization dashboard with interactive charts, custom reports, and team collaboration features.',
      tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'AI Chat Application',
      description: 'An intelligent chat application powered by machine learning with natural language processing capabilities.',
      tech: ['Next.js', 'OpenAI', 'Redis', 'WebSocket'],
      demoLink: '#',
      githubLink: '#'
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

    if (projectsRef.current) observer.observe(projectsRef.current)

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current)
    }
  }, [])

  const handleCardMouseMove = (e, cardRef) => {
    if (window.innerWidth <= 768) return
    
    const rect = cardRef.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15
    
    cardRef.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`
  }

  const handleCardMouseLeave = (cardRef) => {
    cardRef.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)'
  }

  return (
    <section 
      id="projects" 
      className={`projects fade-in ${isVisible ? 'visible' : ''}`}
      ref={projectsRef}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
            >
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link">Live Demo →</a>
                  <a href={project.githubLink} className="project-link">GitHub →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects