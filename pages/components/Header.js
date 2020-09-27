import React, {useState} from 'react';
import Navigation from './smallComponents/Navigation'

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    
    return (
        <>
            <header className="header">
                <img className="site-logo" src='/static/logo.png'/>
                <div className={`menu-container ${menuActive && 'active'}`}>
                    <Navigation/>
                </div>
                <div className="menu-icon" onClick={()=> setMenuActive(!menuActive)}/>
            </header>
            <div className="header-spacer"></div> 
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