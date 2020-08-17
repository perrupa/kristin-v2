import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Layout = ({ children, className = "", header = true }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="container">
      {header && (
        <Header>
          <Logo title={siteTitle} />
          <Navigation />
        </Header>
      )}
      <main className={className}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
