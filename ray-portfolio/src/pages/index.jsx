import Navbar from '@/components/Navbar'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'

export default function index() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      {/* <div className='apple'> testing </div> */}
      <Contact />
    </div>
  )
}