export default function AboutMe() {
  return (
    <div className="aboutme">
      {/* <div className="profilecontainer"> */}
        <img className="profilephoto" alt="Nala and me" src="/profilephoto.jpg"/>
      {/* </div> */}
      <div className="intro">
      <h2>Hello, my name is Raymond</h2>
      <h2>I am a Full Stack Software Engineer</h2>
      <h3>Click here to learn about me!</h3>
      </div>
        <a className="resumelink" target='_blank' href="Raymond Tran Resume.pdf">
          <div className="resumebutton">Resume</div>
        </a>
        <p>Cabin Condensed</p>
      </div>
  )
}