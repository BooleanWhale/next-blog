import Layout from './components/Layout';
import Home from './Home.js'
// import './main.css';

const Index = () => {
  return (
    <Home/>
  )
}

export default Layout(Index) // This adds the global layout (header & footer ect)