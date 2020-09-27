import React from 'react'

export default function SocialLinks() {

    const socialProfiles = [
        {title: 'Code Pen', link: 'www.test.com', image: '/static/logo.png'},
        {title: 'Code Pen', link: 'www.test.com', image: '/static/logo.png'},
        {title: 'Code Pen', link: 'www.test.com', image: '/static/logo.png'},
        {title: 'Code Pen', link: 'www.test.com', image: '/static/logo.png'},
        {title: 'Code Pen', link: 'www.test.com', image: '/static/logo.png'}
    ]

    return ( <>
        {socialProfiles.map((profile, index) => 
            <a key={index} href={profile.link} title={profile.title} className="social-link">
                <img alt={profile.title} src={profile.image}/>
            </a>)
        }
</>)}
