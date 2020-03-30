import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
    <Link to="/"><img width="30" src={require('../images/logo.svg')} /></Link>
    <Link to="/about">About Me</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
