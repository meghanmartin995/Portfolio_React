import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
// import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
    <Link to="/"><img src="{}" width="30" /></Link>
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
