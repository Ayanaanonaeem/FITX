import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Services from './Sections/Services'
import Trainers from './Sections/Trainers'
import Testimonials from './Sections/Testimonials'
import Pricing from './Sections/Pricing'
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