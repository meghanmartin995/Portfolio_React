/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <div id="Footer">
        <div className="Links">
          <a href="https://github.com/meghanmartin995"> <i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/meghanmartinberkeley/"><i class="fab fa-linkedin"></i></a>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built by Meghan Martin
          {` `}
        </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
