import React from "react"
import Head from "next/head"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, title="Book best hotel for your holiday"}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
