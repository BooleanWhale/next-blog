export default function HeroSection() {

  return <section id="hero" className="container">
    <div className="hero-info">
      <h2>Hi, I'm Ashley</h2>
      <h1>I make things for the web and make it look good while I'm at it.</h1>
      {/* <a href="#contact-me"><div className="button">Let's talk</div></a> */}
      <a href="#contact-me" className="button accent-button">Let's talk</a>
    </div>
    <div className="img-container">
        <img className="profile-pic shadow" src='static/mainpage/ashley-saleem-west.jpg'/>
    </div>
  </section>
}