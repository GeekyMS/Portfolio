import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App