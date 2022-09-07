import React from 'react'
import Checkout from '../../components/checkout/Checkout'
import Navbar from '../../components/navbar'
import './style.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Checkout />
    </div>
  )
}
