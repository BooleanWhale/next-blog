import LinkedInLogo from '../svg/LinkedInLogo';
import GoogleLogo from '../svg/GoogleLogo';
import KlaviyoLogo from '../svg/KlaviyoLogo';

export default function CertificationsSection() {

    const certArr = [
        { name: "Klaviyo Systems Integrator", image: <KlaviyoLogo/>, link: "https://verify.skilljar.com/c/yjbp5fpohdwv"},
        { name: "Google Tag Manager", image: <GoogleLogo/>, link: "https://analytics.google.com/analytics/academy/certificate/zG8Y8HsuQkWl1d6v9LYx-g"},
        { name: "Linked in Assessments", image: <LinkedInLogo/>, link: "https://www.linkedin.com/in/ashsw"}
   ]

    return <section id="certifications" className="color-off-bg">
        <h2 className="center">Certified with</h2>
        <div className="container">
            {certArr.map( (cert, index) =>
                <a key={index} href={cert.link} title={cert.name} className="certification" target="_blank">
                    {cert.image}
                </a>
            )}
        </div>
    </section>
}