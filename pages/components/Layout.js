import React from 'react';
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

export default function Layout (Page) {

    return (props) => {
        return ( 
            <>
                <Header/>
                    <Page {...props}/>
                <Footer/>
            </>
        )
    }
}

// The props are needed incase a page component recieves props
// Since a Higher Order Compent is a wrapper, props need to pass through it