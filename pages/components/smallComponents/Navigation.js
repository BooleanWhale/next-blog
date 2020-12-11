import React from 'react';
// import Link from 'next/Link';

// export default function Navigation() {

//     const navLinks = [
//         {title:"Home", path:"/"},
//         {title:"Blog", path:"/blog"},
//         {title:"About", path:"/about"},
//         {title:"Contact", path:"/contact"}
//     ]

//     return <nav className="navigation">
//         <ul>
//             { navLinks.map((link, index) => 
//                     <li key={link.title}>
//                         <Link as={link.path} href={link.path}><a>{link.title}</a></Link>
//                     </li>
//                 )
//             }
//         </ul>
//     </nav>
// }

export default function Navigation() {

    const navLinks = [
        {title:"Home", path:"#"},
        {title:"About", path:"#about-me"},
        {title:"Contact", path:"#contact-me"}
    ]

    return <nav className="navigation">
        <ul>
            { navLinks.map((navLink, index) => 
                    <li key={navLink.title}>
                        <a href={navLink.path}>{navLink.title}</a>
                    </li>
                )
            }
        </ul>
    </nav>
}