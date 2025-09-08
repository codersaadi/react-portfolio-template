import { useEffect, useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer>
      <div className="footer-text">
        Made with <span>❤️</span> by Syed © {currentYear}
      </div>
      <div className="attribution">
        <a href="https://github.com/codersaadi" target="_blank" rel="noopener noreferrer">
          github.com/codersaadi
        </a>
        {' | '}
        <a href="https://github.com/codersaadi/react-portfolio-template" target="_blank" rel="noopener noreferrer">
          Template
        </a>
      </div>
    </footer>
  )
}

export default Footer