import React, { useState } from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import InstalSection from '../components/InstalSection'
import LocateSection from '../components/LocateSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toogleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogleSideBar} />
      <Navbar toogle={toogleSideBar} />
      <HeroSection />
      <InfoSection id='about' />
      <Services />
      <InstalSection />
      <LocateSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
