import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi, I'm Meghan</h1>
        <p>Developer + Designer | React.js, Ruby on Rails, Javascript, HTML/CSS</p>
        <Link to="/page-2/">Projects</Link>
      </div>
    </div>


  </Layout>
)

export default IndexPage
