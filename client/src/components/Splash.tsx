import { useEffect, useState } from 'react'
import './Splash.css'

const PHRASES = ['नमस्ते', 'Hello', 'ನಮಸ್ಕಾರ', 'こんにちは']

type Props = {
  onFinish?: () => void
}

export default function Splash({ onFinish }: Props) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter')
  const [hiding, setHiding] = useState(false)

  // Durations (ms) — tweak to taste
  const IN_DUR = 700
  const HOLD_DUR = 600
  const OUT_DUR = 400
  const TOTAL = IN_DUR + HOLD_DUR + OUT_DUR

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduced) {
      // Skip animation quickly
      onFinish?.()
      return
    }

    setPhase('enter')
    const tIn = setTimeout(() => setPhase('hold'), IN_DUR)
    const tHold = setTimeout(() => setPhase('exit'), IN_DUR + HOLD_DUR)
    const tOut = setTimeout(() => {
      if (index + 1 < PHRASES.length) {
        setIndex((i) => i + 1)
        setPhase('enter')
      } else {
        setHiding(true)
        setTimeout(() => onFinish?.(), 350)
      }
    }, TOTAL)

    return () => {
      clearTimeout(tIn)
      clearTimeout(tHold)
      clearTimeout(tOut)
    }
  }, [index])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setHiding(true)
        setTimeout(() => onFinish?.(), 200)
      }
    }
    function onClick() {
      setHiding(true)
      setTimeout(() => onFinish?.(), 200)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('click', onClick)
    }
  }, [])

  if (reduced) return null

  const phrase = PHRASES[index]
  const letters = Array.from(phrase) // better for complex scripts

  return (
    <div className={`splash ${hiding ? 'splash--hide' : ''}`} aria-hidden={hiding}>
      <div className={`word word--${phase}`} role="img" aria-label={phrase}>
        {letters.map((ch, i) => (
          <span className="letter" key={i} style={{ ['--i' as any]: i }}>
            {ch}
          </span>
        ))}
      </div>

      {/* simple sparkle burst */}
      <div className={`sparks ${phase === 'exit' ? 'sparks--pop' : ''}`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} style={{ ['--n' as any]: i }} />
        ))}
      </div>
    </div>
  )
}