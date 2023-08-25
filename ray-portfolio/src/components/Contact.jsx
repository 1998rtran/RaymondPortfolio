import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div className='contactscomponent'>
      <h2>Contact me!</h2>
      <div>
        <a target="_blank" className='contacts' href="https://www.linkedin.com/in/raymondgtran"><BsLinkedin /></a>
        <a target="_blank" className='contacts' href="https://github.com/1998rtran"><BsGithub /></a>
        <a className='contacts' href="mailto:raymondtran14@gmail.com"><MdEmail /></a>
      </div>
    </div>
  )
}