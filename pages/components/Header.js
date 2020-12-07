import React, {useState} from 'react';
import Navigation from './smallComponents/Navigation'
import HamburgerIcon from './svg/IconMenu'
import DarkModeToggle from './smallComponents/DarkModeToggle';
import LogoIcon from './svg/LogoIcon';

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    
    return (
        <>
            <header className="header">
                {/* <img className="site-logo" src='/static/logo.png'/> */}
                {/* <a href="/#" className="site-logo"><LogoIcon/></a> */}
                <LogoIcon/>
                <div className={`menu-container ${menuActive && 'active'}`}>
                    <Navigation/>
                </div>
                <div className="nav-right">
                    <DarkModeToggle/>
                    <div className="menu-icon" onClick={()=> setMenuActive(!menuActive)}>
                        <HamburgerIcon/>
                    </div>
                </div>
            </header>
                    
            <div className="header-spacer dark-bg"></div>
        </>
    ) // not all browsers support position:sticky;
}




// import React, {useState} from 'react';
// import Navigation from './Navigation.js'
// import DarkModeButton from './smallComps/DarkModeButton.js'

// export default function Header() {
//     const [menuActive, setMenuActive] = useState(false);

//     return <header className="mainHeader">

//         <div className="logo">logo</div>

//         <div className={`menu-container ${menuActive && 'active'}`}>
//             <Navigation/>
//             {/* <DarkModeButton/> */}
//         </div>
//         <i className="ionicons icon ion-ios-menu menu-icon" onClick={()=> setMenuActive(!menuActive)}/>
//     </header>
//   }