import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Trainers from './sections/Trainers'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import FAQ from './Sections/FAQ'
// import { Contact } from 'lucide-react'
import Contact from './Sections/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* ✅ Sab sections sequentially render ho rahe hain */}
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Testimonials />
      <Pricing />
      <FAQ/>
      <Contact/>
      <Footer/>
      {/* ✅ Debug text - yeh dikhna chahiye page pe */}
      
    </div>
  )
}

export default App