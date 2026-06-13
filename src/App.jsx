import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Sections from './components/Sections'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

const GalleryPage = lazy(() => import('./components/GalleryPage'));
const ServiceDetail = lazy(() => import('./components/ServiceDetail'));
const BeforeAfter = lazy(() => import('./components/BeforeAfter'));

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <p className="text-gray-500 font-medium animate-pulse">Učitavanje...</p>
    </div>
  </div>
);

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
    <Suspense fallback={<div className="h-96"></div>}>
      <BeforeAfter />
    </Suspense>
  </>
)

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/usluga/:id" element={
            <>
              <Header sticky={true} />
              <ServiceDetail />
            </>
          } />
          <Route path="/galerija" element={<GalleryPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
