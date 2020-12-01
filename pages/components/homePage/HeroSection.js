export default function HeroSection() {

  return <section id="hero" className="container">
    <div className="hero-info">
      <h3>Somthing something web design and other things. I do web design for my company and things.</h3>
      {/* <a href="#contact-me"><div className="button">Let's talk</div></a> */}
      <a href="#contact-me" className="button accent-button">Let's talk</a>
    </div>
    <div className="img-container">
        <img className="profile-pic shadow" src='/static/mainpage/ashley-saleem-west.jpg'/>
    </div>
  </section>
}