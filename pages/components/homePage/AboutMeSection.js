export default function AboutMeSection() {

    return <section id="about-me" className="container">
        <div id="about-me-image-container">
            <div id="about-me-image" style={{backgroundImage: "url(static/mainpage/about-me.webp)"}}></div>
            {/* <img id="about-me-image" src="/static/test-person.jpg"/> */}
        </div>
        <div id="about-me-info-cont">
            <div id="about-me-info">
                <h2>About Me</h2>
                <p>Hi, my name is Ashley Saleem-West. I'm a web developer based St Albans, a wonderful town near London in the UK. I describe myself as a passionately user-focused developer who loves coding, design, and the web platform.</p>
                <p>Starting as a designer and becoming acquainted with web development through personal E-Commerce projects before moving onto E-Service Europe Ltd, to redesign and develop their E-Commerce website.</p>
                <p> With experiece in MySQL databases and React.JS, I am always pushing myself to learn more and have been making use of the time saved from commuting by participating in Harvard's CS50 course for Web Programming.</p>
                <p>I think of performance and design as two sides of the same coin, which is why I push for great user experience without a heavy overhead. I like to ask myself how I can make an application easy, enjoyable,and fast to use.</p>
                <p>When I'm not coding or designing, I can be found drawing or caring for my <a href="https://www.instagram.com/jaqenclownfish/">two adorable clownfish.</a></p>
            </div>
        </div>
    </section>
}