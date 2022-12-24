import React from 'react'
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';

const RenderLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default RenderLayout