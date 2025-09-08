import { useState, useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)

  const skills = [
    {
      icon: '🎯',
      name: 'Strategic Planning',
      description: 'I analyze requirements and architect scalable solutions'
    },
    {
      icon: '⚡',
      name: 'Full-Stack Development',
      description: 'I build end-to-end applications from UI to database'
    },
    {
      icon: '🤖',
      name: 'AI Integration',
      description: 'I implement machine learning and AI features'
    },
    {
      icon: '🔧',
      name: 'System Optimization',
      description: 'I enhance performance and ensure scalability'
    },
    {
      icon: '👥',
      name: 'Team Leadership',
      description: 'I mentor developers and guide technical decisions'
    },
    {
      icon: '🚀',
      name: 'Product Delivery',
      description: 'I ship high-quality products that users love'
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

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )

    if (aboutRef.current) observer.observe(aboutRef.current)
    if (skillsRef.current) skillsObserver.observe(skillsRef.current)

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current)
      if (skillsRef.current) skillsObserver.unobserve(skillsRef.current)
    }
  }, [])

  return (
    <section 
      id="about" 
      className={`about fade-in ${isVisible ? 'visible' : ''}`}
      ref={aboutRef}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <h3>Turning Ideas Into Reality</h3>
            <p>
              I'm a Software Engineer with deep expertise in full-stack development, AI/ML integration, and cloud architecture. 
              I specialize in creating sophisticated applications that leverage modern technologies like Python, JavaScript, 
              and machine learning frameworks to solve complex business challenges.
            </p>
            <p>
              With experience across startups and enterprise environments, I've architected and delivered scalable solutions 
              that serve thousands of users. I'm passionate about clean code, system design, and building products that 
              make a meaningful impact.
            </p>
            <p>
              Beyond coding, I enjoy mentoring developers, contributing to open-source projects, and staying at the forefront 
              of emerging technologies like AI and blockchain.
            </p>
          </div>
          <div className="skills">
            <div 
              className={`skills-grid ${skillsVisible ? 'visible' : ''}`}
              ref={skillsRef}
            >
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-card"
                  style={{
                    animationDelay: skillsVisible ? `${index * 0.1}s` : '0s'
                  }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About