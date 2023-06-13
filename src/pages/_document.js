import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../pages/Navbar'
import CTA from './CTA'
import Footer from './Footer'
import Article from './Article'
import React from 'react'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
      <Main />
      <CTA/>
<Footer/>
        <NextScript />
      </body>
    </Html>
  )
}
