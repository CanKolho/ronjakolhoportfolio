import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import Motion from './motion/motion.jsx'

const Footer2 = () => {
  const socials = [
    { name: 'facebook', icon: 'fa-brands fa-facebook', anchor: 'https://www.facebook.com/ronja.kolho' },
    { name: 'linkedin', icon: 'fa-brands fa-linkedin' , anchor: 'https://fi.linkedin.com/in/ronjakolho' },
    { name: 'instagram', icon: 'fa-brands fa-instagram', anchor: 'https://www.instagram.com/ronjajjulia?igsh=MTQxYmpweHFsNXh3bw== ' }
  ]

  const links = ['Home', 'About', 'References', 'Contact']

  return (
    <footer>
      <ul className="socials">
        {socials.map((social, index) => (
          <li key={index}>
            <Motion index={index} direction='down'>
              <a href={social.anchor}>
                <i className={social.icon}></i>
              </a>
            </Motion>
          </li>
        ))}
      </ul>
      <ul className="links">
        {links.map((link, index) => (
          <li key={index}>
            <Motion index={index + 1} direction='down'>
              <Link 
                key={link} 
                to={link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`}
              >
                {link}
              </Link>
            </Motion>
          </li>
        ))}
      </ul>
      <Motion>
        <p className="legal">© {new Date().getFullYear()} All rights reserved</p>
      </Motion>
      <Motion>
        <p className="legal">
        Website created by <a href='https://cankolho.github.io/CanKolho-Portfolio/'>Can Kolho</a> 
      </p>
      </Motion>
      
    </footer>
  )
}

export default Footer2
