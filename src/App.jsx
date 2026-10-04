import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'
import Work from './routes/Work'
import ProjectPage from './routes/ProjectPage'
import Experience from './routes/Experience'
import Notes from './routes/Notes'
import NotePage from './routes/NotePage'
import About from './routes/About'
import NotFound from './routes/NotFound'

const DARK_QUERY = '(prefers-color-scheme: dark)'
const getSystemTheme = () => (window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light')

function App() {
  // Starts from the device setting and follows it live until the visitor uses the toggle.
  const [theme, setTheme] = useState(getSystemTheme)
  const userChoseTheme = useRef(false)
  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY)
    const onSystemChange = (event) => {
      if (!userChoseTheme.current) setTheme(event.matches ? 'dark' : 'light')
    }
    query.addEventListener('change', onSystemChange)
    return () => query.removeEventListener('change', onSystemChange)
  }, [])
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  const handleThemeSwitch = () => {
    userChoseTheme.current = true
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className="min-h-screen bg-page text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:border-2 focus:border-current focus:bg-surface focus:px-4 focus:py-2 font-mono text-sm font-bold no-underline text-current"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onThemeSwitch={handleThemeSwitch} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/:slug" element={<ProjectPage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:slug" element={<NotePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
