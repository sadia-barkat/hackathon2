import React from 'react'
import Hero from './component/hero'
import Feature from './component/featured'
import Product from './component/product'
import Shopify from './component/shopify'
export default function Home  () {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Product/>
      <Shopify/>
    </div>
  )
}

