import React from 'react'
import Layout from './components/Layout'
import SocialLinks from './components/smallComponents/SocialLinks.js'

const About = () => {
    return (
    <section className="container page about row">
        <div className="about-image">
            <img src="/static/ashley-saleem-west.jpg"/>
        </div>
        <div className="about-title">
            <h1>Hi, I'm Ashley</h1>
        </div>
        <div className="about-text text-size-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="social-links">
            <SocialLinks/>
        </div>
        <div className="about-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.lorem aefawef awef brt drt hsare areg ges dyj ju fiy jtd srth aerg areb srtn dtuj dtyj srth aerg aergv abdf bat srthb rtsh dtyj tjy jty srte vs`d ce.</p>
        </div>
    </section>
)}

export default Layout(About);









// import React from 'react'
// import Layout from './components/Layout'
// import SocialLinks from './components/smallComponents/SocialLinks.js'

// const About = () => {
//     return (
//     <section className="container about row">
//         <div className="bio">
//             <div className="profile-picture">
//                 <img src="/static/ashley-saleem-west.jpg"/>
//             </div>
//             <div className="bio-text">
//                 <h1>Hi, I'm Ashley</h1>
//                 <p>lorem aefawef awef brt drt hsare areg ges dyj ju fiy jtd srth aerg areb srtn dtuj dtyj srth aerg aergv abdf bat srthb rtsh dtyj tjy jty srte vs`d ce.</p>
//             </div>
//         </div>
//         <div className="social-Links">
//             <SocialLinks/>
//         </div>
//     </section>
// )}

// export default Layout(About);