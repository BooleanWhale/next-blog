import React from 'react';
import HeroSection from './components/homePage/HeroSection'
import WhatIDoSection from './components/homePage/WhatIDoSection'
import WorksSection from './components/homePage/WorksSection'
import AboutMeSection from './components/homePage/AboutMeSection'
import CertificationsSection from './components/homePage/CertificationsSection'
import ContactMeSection from './components/homePage/ContactMeSection'
import SocialLinksSection from './components/homePage/SocialLinksSection'
import DarkModeToggle from './components/smallComponents/DarkModeToggle'

export default function Home ({slugs}) {
  return (
    <>
    {/* <div id="home-banner"></div> */}
    <p className="test">HOMEPAGE</p>
      <HeroSection/>
      <WhatIDoSection/>
      <WorksSection/>
      <AboutMeSection/>
      <CertificationsSection/>
      <ContactMeSection/>
      <SocialLinksSection/>
      <h1>test</h1>
    </> 
  )
}