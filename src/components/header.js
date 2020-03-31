import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
import { navigate } from '@reach/router';





class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}


  render() {
    return (
        <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
          <div className="HeaderGroup">
          <Link to="/"><img width="30" src={require('../images/logo.svg')} /></Link>
          <a onClick={() => navigate("#About")}>About Me</a>
          <a onClick={() => navigate("#Projects")} >Projects</a>
          <a onClick={() => navigate("#Footer")}>Contact</a>
          </div>
        </div>
    )
  }
}



  Header.propTypes = {
    siteTitle: PropTypes.string,
  }

  Header.defaultProps = {
    siteTitle: ``,
  }


export default Header
