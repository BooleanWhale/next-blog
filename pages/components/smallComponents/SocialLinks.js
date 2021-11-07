import React from 'react'

export default function SocialLinks() {

    const socialProfiles = [
        {title: 'Dribbble', link: 'www.https://dribbble.com/Ashleysw', image: 'static/social-icons/dribbble.svg'},
        {title: 'Linked In', link: 'www.test.com', image: 'static/social-icons/linkedin.svg'},
        {title: 'Code Pen', link: 'www.test.com', image: 'static/social-icons/codepen.svg'},
        {title: 'Behance', link: 'https://www.behance.net/ashsaleemwest', image: 'static/social-icons/behance.svg'},
        {title: 'Github', link: 'https://github.com/BooleanWhale', image: 'static/social-icons/github.svg'}
    ]

    return ( <>
        {socialProfiles.map((profile, index) => 
            <a key={index} href={profile.link} title={profile.title} className="social-link">
                <img alt={profile.title} src={profile.image} defer/>
            </a>)
        }
</>)}
