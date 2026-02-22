import { Routes, Route } from 'react-router-dom'
import './App.css'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Sections from './components/Sections'
import ServiceDetail from './components/ServiceDetail'
import BeforeAfter from './components/BeforeAfter'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

const HomePage = () => (
  <>
    <div id='pagehead' className="relative">
      <Header />
      <Hero />
    </div>
    <div className='about bg-white'>
      <AboutUs />
      <Features />
    </div>
    <Sections />
    <BeforeAfter />
  </>
)

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usluga/:id" element={
          <>
            <Header sticky={true} />
            <ServiceDetail />
          </>
        } />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
