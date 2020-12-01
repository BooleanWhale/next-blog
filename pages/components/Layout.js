import React from 'react';
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import DarkModeSwtich from './smallComponents/DarkModeSwitch';

export default function Layout (Page) {

    return (props) => {
        return ( 
            <>
                <DarkModeSwtich/>
                <Header/>
                <main className={"main dark-bg"}>
                <div className="main-despace"></div>
                        <Page {...props}/>
                <div className="main-despace"></div>
                </main>
                <Footer/>
            </>
        )
    }
}

// The props are needed incase a page component recieves props
// Since a Higher Order Compent is a wrapper, props need to pass through it