import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Education />
      <Contact />
    </div>
  )
}

export default App