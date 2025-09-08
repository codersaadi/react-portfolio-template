import { useState, useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const experienceRef = useRef(null)

  const experiences = [
    {
      date: '2022 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Led development of enterprise applications, mentored junior developers, and implemented CI/CD pipelines reducing deployment time by 60%.'
    },
    {
      date: '2020 - 2022',
      title: 'Full Stack Developer',
      company: 'Digital Agency Co.',
      description: 'Developed and maintained multiple client projects using React and Node.js. Improved application performance by 40% through optimization.'
    },
    {
      date: '2019 - 2020',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      description: 'Built responsive web applications, implemented UI/UX designs, and collaborated with backend teams to deliver seamless user experiences.'
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

    if (experienceRef.current) observer.observe(experienceRef.current)

    return () => {
      if (experienceRef.current) observer.unobserve(experienceRef.current)
    }
  }, [])

  return (
    <section 
      id="experience" 
      className={`experience fade-in ${isVisible ? 'visible' : ''}`}
      ref={experienceRef}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience