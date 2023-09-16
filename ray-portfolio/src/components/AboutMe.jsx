export default function AboutMe() {
  return (
    <div className="aboutme">
      {/* <div className="profilecontainer"> */}
        <img className="profilephoto" alt="Nala and me" src="/profilephoto.jpg"/>
      {/* </div> */}
      <h2 className="intro">Hello, my name is Raymond. I am a Full Stack Software Engineer</h2>
      <a className="resumelink" target='_blank' href="Raymond Tran Resume.pdf">
        <div className="resumebutton">Resume</div>
      </a>
    </div>
  )
}