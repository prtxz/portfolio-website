import { useEffect, useState } from 'react'
import './App.css'
import Splash from './components/Splash'
import Landing from './components/Landing'

function App() {
  const [splashDone, setSplashDone] = useState(false)

  // Lock scroll while splash is active
  useEffect(() => {
    const body = document.body
    if (!splashDone) body.classList.add('no-scroll')
    else body.classList.remove('no-scroll')
    return () => body.classList.remove('no-scroll')
  }, [splashDone])

  return (
    <>
      {!splashDone && <Splash onFinish={() => setSplashDone(true)} />}

      <main
        id="main"
        role="main"
        aria-hidden={!splashDone}
        className={`app-root ${splashDone ? 'app-visible' : 'app-hidden'}`}
      >
        <div className="app-shell">
          {/* App layout goes here — replace with your components */}
        </div>
        <div className="app-shell">
  <Landing />
</div>

      </main>
    </>
  )
}

export default App