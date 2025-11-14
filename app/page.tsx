import Navbar from '@/app/components/Navbar'
import Header from '@/app/components/Header'
import About from '@/app/components/About'
import Services from '@/app/components/Services'
import Projects from '@/app/components/Projects'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'
import { navItemsHome } from '@/app/assets/assets'

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
