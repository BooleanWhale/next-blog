import LinkedInLogo from '../svg/LinkedInLogo';
import IconSun from '../svg/IconSun'

export default function CertificationsSection() {

    const certArr = [
        { name: "Linked in Assessments", image: <LinkedInLogo/>, link: "https://www.linkedin.com/in/ashsw/#ember90"},
        { name: "google", image: <LinkedInLogo/>, link: "https://www.google.com"},
        { name: "google", image: <LinkedInLogo/>, link: "https://www.google.com"}
    ]

    return <section id="certifications" className="color-off-bg">
        <h2 className="center">Certified with</h2>
        <div className="container">
            {certArr.map( (cert, index) =>
                <a key={index} href={cert.link} title={cert.name} className="certification">
                    {cert.image}
                </a>
            )}
        </div>
    </section>
}