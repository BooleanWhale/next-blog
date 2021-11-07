export default function AboutMeSection() {

    return <section id="about-me" className="container">
        <div id="about-me-image-container">
            <div id="about-me-image" style={{backgroundImage: "url(static/mainpage/about-me.webp)"}}></div>
            {/* <img id="about-me-image" src="/static/test-person.jpg"/> */}
        </div>
        <div id="about-me-info-cont">
            <div id="about-me-info">
                <h2>About Me</h2>
                <p>
                Hi, my name is Ashley Saleem-West. I'm a web developer with a background in design, based in St Albans (a wonderful town near London in the UK). I currently work at Underwaterpistol as a member of the web development team. I work with SCSS, HTML, JS and Liquid to develop bespoke Shopify Plus stores.
                </p>
                <p>
                Starting as a designer and becoming acquainted with web development through personal E-Commerce projects, I moved onto E-Service Europe Ltd to redesign and develop their E-Commerce website.
                </p>
                <p>
                With experience in SQL databases and React.JS, I am always pushing myself to learn more in my spare time. I’ve worked on personal projects to become familiar with Libraries and frameworks that personally interest me, including Next.js and Tailwind CSS. I also like to keep up with the best practices for CSS and achieve greater performance and security by relying on pure CSS for user interactions and animations.
                </p>
                <p>When I'm not coding or designing, I can be found drawing or caring for my <a href="https://www.instagram.com/jaqenclownfish/">two adorable clownfish.</a></p>
            </div>
        </div>
    </section>
}