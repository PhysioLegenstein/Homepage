import React from "react"

import Seo from "./seo"
import NavigationMenu from "./navbar"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <Seo />
      <NavigationMenu />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
