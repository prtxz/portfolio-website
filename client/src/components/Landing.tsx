import { useEffect, useState } from 'react'
import prathiksha from '../assets/prathiksha.png'
import './Landing.css'

export default function Landing() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={`landing ${visible ? 'landing--visible' : ''}`} aria-label="Landing">
      <img src={prathiksha} alt="Prathiksha" className="landing__img" />
    </section>
  )
}