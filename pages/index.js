import Layout from './components/Layout';
import Home from './Home.js'
import Head from 'next/head';
// import './main.css';

const Index = () => {
  return ( 
  <>
    <Head>
      <title>Ashley - Front End Developer</title>
      <html lang='en'/>
      <meta name="description" content="Front End Developer in UK - Ashley Saleem-West" />
    </Head>
    <Home/>
  </>
  )
}

export default Layout(Index) // This adds the global layout (header & footer ect)