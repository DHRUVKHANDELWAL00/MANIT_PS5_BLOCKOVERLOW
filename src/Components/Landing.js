import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import WasteDetail from './WasteDetail';
import WasteQuote from './WasteQuote';
const Landing = () => {
  return (
    <div>
       <Navbar />
      <Header />
      <WasteDetail />
      <WasteQuote />
    </div>
  )
}

export default Landing
