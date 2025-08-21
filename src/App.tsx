import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'
import ThemeToggle from './components/ThemeToggle'

export default function App(){
  return (
    <div className="min-h-screen relative">
      <div className="absolute right-6 top-6"><ThemeToggle /></div>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Chatbot />
    </div>
  )
}