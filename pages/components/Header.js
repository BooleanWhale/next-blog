import React from 'react';
import Navigation from './smallComponents/Navigation'

export default function Header() {

    return (
    <header className="header">
        <img className="logo" scr="/vercel.svg"/>
        <Navigation/>
    </header> 
    )
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