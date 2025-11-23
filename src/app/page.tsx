import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import About from '@/components/About'
import Services from '@/components/services/Services'
import Projects from '@/components/projects/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { navItemsHome } from "@/lib/assetsProvider"

export default function HomePage() {
  return (
    <div className='flex flex-col items-center gap-32'>
      <Navbar navList={navItemsHome} />
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
