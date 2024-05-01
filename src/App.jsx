import './App.css'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Sections from './components/Sections'


function App() {
  return (
    <>
      <div id='pagehead'>
        <Header />
        <Hero />
      </div>
      <div className='about'>
      <AboutUs />
      <Features />
      </div>

      <Sections />

      {/* <Gallery></Gallery> */}


      <Footer />

    </>
  )
}

export default App
