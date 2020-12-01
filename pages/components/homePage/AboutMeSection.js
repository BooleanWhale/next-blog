export default function AboutMeSection() {

    return <section id="about-me" className="container">
        <div id="about-me-image-container">
            <div id="about-me-image" style={{backgroundImage: "url(/static/test-person.jpg)"}}></div>
            {/* <img id="about-me-image" src="/static/test-person.jpg"/> */}
        </div>
        <div id="about-me-info-cont">
            <div id="about-me-info">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant elit magna platea. Curabitur posuere dolor duis adipiscing tortor duis. Pellentesque vitae dictumst tortor ipsum.</p>
                <p>Purus eu, nec neque fermentum vitae eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant elit magna platea. Curabitur posuere dolor duis adipiscing tortor duis. Pellentesque vitae dictumst tortor ipsum. Purus eu, nec neque fermentum vitae eget.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant elit magna platea. Curabitur posuere dolor duis adipiscing tortor duis. Pellentesque vitae dictumst tortor ipsum.</p>
            </div>
        </div>
    </section>
}