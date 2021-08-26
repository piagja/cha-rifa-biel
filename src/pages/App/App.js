import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Number from '../../components/Number/Number'

import './App.css'

export default function App () {
  return (
    <div className='hero'>
      <div className='container'>
        <Header />
        <Number />
        <Footer />
      </div>
    </div>
  )
}
