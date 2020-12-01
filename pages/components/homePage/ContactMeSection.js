export default function ContactMeSection() {

    return <section id="contact-me" className="container">

        <div id="contact-me-text">
            <div>
                <h3>Send me a message!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant elit magna platea. Curabitur posuere dolor duis adipiscing tortor duis. Pellentesque vitae dictumst tortor ipsum.
                </p>
                <p className="hand-emoji">👋</p>
            </div>
        </div>
        <div id="contact-me-box">
            <form id="contact-me-form">
                <input placeholder="Your name" type="text" tabIndex="1" required autoFocus/><br/>
                <input placeholder="Your Email Address" type="email" tabIndex="2" required/><br/>
                <input placeholder="Your Phone Number" type="tel" tabIndex="3"/><br/>
                <textarea placeholder="Type your Message Here...." tabIndex="5" required></textarea><br/>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send message</button>
            </form>
            <div className="contact-bg main-gradient"></div>
        </div>

    </section>
}