export default function CertificationsSection() {

    const certArr = [
        { name: "Linked in Assessments", image: "/static/mainpage/certifications/linkedin-assessments.svg", link: "https://www.linkedin.com/in/ashsw/#ember90"},
        { name: "google", image: "/static/google-logo.svg", link: "https://www.google.com"},
        { name: "google", image: "/static/google-logo.svg", link: "https://www.google.com"}
    ]

    return <section id="certifications" className="color-off-bg">
        <h2 className="center">Certified with</h2>
        <div className="container">
            {certArr.map( (cert, index) =>
                <a key={index} href={cert.link} title={cert.name} className="certification">
                    <img src={cert.image}/>
                </a>
            )}
        </div>
    </section>
}