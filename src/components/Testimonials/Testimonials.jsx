import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const testimonialsRef = useRef(null)

  const testimonials = [
    {
      text: "Syed delivered an exceptional full-stack solution that exceeded our expectations. His attention to detail and innovative approach to problem-solving make him a valuable asset to any team.",
      author: "Sarah Johnson",
      position: "CTO, TechFlow Inc."
    },
    {
      text: "Working with Syed was a game-changer for our startup. His expertise in AI integration helped us build a product that truly stands out in the market.",
      author: "Michael Chen",
      position: "Founder, InnovateAI"
    },
    {
      text: "His clean code architecture and scalable solutions saved our team countless hours. Syed's mentoring also helped elevate our entire development process.",
      author: "Emily Rodriguez",
      position: "Lead Developer, DataSync"
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

    if (testimonialsRef.current) observer.observe(testimonialsRef.current)

    return () => {
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current)
    }
  }, [])

  return (
    <section 
      id="testimonials" 
      className={`testimonials fade-in ${isVisible ? 'visible' : ''}`}
      ref={testimonialsRef}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What People Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-text">
                "{testimonial.text}"
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials