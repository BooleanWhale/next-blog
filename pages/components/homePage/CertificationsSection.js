import LinkedInLogo from '../svg/LinkedInLogo';
import GoogleLogo from '../svg/GoogleLogo';

export default function CertificationsSection() {

    const certArr = [
        { name: "Linked in Assessments", image: <LinkedInLogo/>, link: "https://www.linkedin.com/in/ashsw"},
        { name: "Google Skillshop", image: <GoogleLogo/>, link: "https://skillshop.exceedlms.com/student/award/12984802"},
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