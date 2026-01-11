import { useEffect, useState } from 'react'
import prathiksha from '../assets/prathiksha.png'
import Dither from './Dither'
import PixelTransition from './PixelTransition'
import './Landing.css'

export default function Landing() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <section className={`landing ${visible ? 'landing--visible' : ''}`} aria-label="Landing">
        <div className="landing__bg" aria-hidden="true">
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Dither
              waveColor={[0.5, 0.5, 0.5]}
              disableAnimation={false}
              enableMouseInteraction
              mouseRadius={0.3}
              colorNum={4}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          </div>
        </div>

        <div className="landing__content">
          <div className="landing__left">
            <img src={prathiksha} alt="Prathiksha" className="landing__img" />

            <div className="landing__text">
              <p className="landing__title">
                Software Developer | AI & ML-enabled Full Stack Engineer
              </p>
              <p className="landing__bio">
                Full-stack and AI/ML engineer who builds end-to-end web applications and brings
                machine learning ideas into production. From intuitive frontend interfaces to robust
                backend systems and model-driven features, the focus is on creating solutions that
                scale and crafting products that make real impact.
              </p>
            </div>
          </div>

          <div className="landing__cards">
            <PixelTransition
              firstContent={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                  alt="default pixel transition content, a cat!"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: '#111',
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: '3rem',
                      color: '#ffffff',
                    }}
                  >
                    Yo, yo, yo! 1-4-8-3 to the 3 to the 6 to the 9
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
        </div>
      </section>

      <nav className="landing-nav" aria-label="Main navigation">
        <ul className="landing-nav__list">
          <li className="landing-nav__item" aria-label="About">
            <span className="landing-nav__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="3.3" />
                <path d="M6.4 18.5c.8-2.5 2.8-4.1 5.6-4.1s4.7 1.6 5.6 4.1" />
              </svg>
            </span>
            <span className="landing-nav__label">About</span>
          </li>
          <li className="landing-nav__item" aria-label="Skills">
            <span className="landing-nav__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 20 16 4l-1.8 9.2H18L8 20Z" />
              </svg>
            </span>
            <span className="landing-nav__label">Skills</span>
          </li>
          <li className="landing-nav__item" aria-label="Experience">
            <span className="landing-nav__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="5" y="9" width="14" height="9" rx="1.8" />
                <path d="M9 9V7.4A1.9 1.9 0 0 1 10.9 5.5h2.2A1.9 1.9 0 0 1 15 7.4V9" />
              </svg>
            </span>
            <span className="landing-nav__label">Experience</span>
          </li>
          <li className="landing-nav__item" aria-label="Projects">
            <span className="landing-nav__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="5" y="5" width="6" height="6" rx="1.2" />
                <rect x="13" y="5" width="6" height="6" rx="1.2" />
                <rect x="5" y="13" width="6" height="6" rx="1.2" />
                <rect x="13" y="13" width="6" height="6" rx="1.2" />
              </svg>
            </span>
            <span className="landing-nav__label">Projects</span>
          </li>
          <li className="landing-nav__item" aria-label="Terminal">
            <span className="landing-nav__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 8.5 9 11 6 13.5" />
                <path d="M11 15h7" />
                <rect x="4" y="5" width="16" height="14" rx="2" />
              </svg>
            </span>
            <span className="landing-nav__label">Terminal</span>
          </li>
          <li className="landing-nav__item" aria-label="Contact">
            <span className="landing-nav__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="4.2" y="6.5" width="15.6" height="11" rx="1.8" />
                <path d="m5.5 8 6.5 4.4L18.5 8" />
              </svg>
            </span>
            <span className="landing-nav__label">Contact</span>
          </li>
        </ul>
      </nav>
    </>
  )
}
