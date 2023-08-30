import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import TechSkills from '@/components/TechSkills';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';

export default function index() {
  return (
    <div>
      <Navbar />
      <div className="mainpage">
        <AboutMe />
        <Projects />
        <Technologies />
        <TechSkills />
        <Contact />
      </div>
    </div>
  )
}