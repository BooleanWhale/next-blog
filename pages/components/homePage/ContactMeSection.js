export default function ContactMeSection() {

    return <section id="contact-me" className="container">

        <div id="contact-me-text">
            <div>
                <h3>Send me a message!</h3>
                <p>Want to start a conversation? Why not send me a message using the contact form!
                </p>
                <p>Or if you prefer, you can email me manually at hello@ashleysw.com and I'll get back to you as soon as I can! I can't wait to speak with you!! :)
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