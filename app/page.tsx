import Navbar from './components/Navbar'
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-32'>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
