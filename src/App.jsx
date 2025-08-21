import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className="min-h-screen light:bg-white dark:bg-black text-gray-800 dark:text-gray-200">

      <Navbar theme = {theme} onThemeSwitch = {handleThemeSwitch}/>
      <Hero theme = {theme}/>
      <Experience theme ={theme} />
      <Projects theme ={theme}/>
      <About theme ={theme}/>
      <Education theme={theme}/>
      <Contact theme ={theme}/>
      <Footer theme={theme} />
    </div>
  )
}

export default App