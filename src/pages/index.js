import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from '../components/Section';
import Projects from '../components/Projects'


const IndexPage = () => (
  <Layout style={{ cursor: `url(../images/cursor.png'), auto` }}>
    <SEO title="Home" />

    <div className="Hero">
      <div className="HeroGroup">
        <h1>hi, i'm <span>meghan</span></h1>
        <p>front-end developer + designer </p>
          <p className="Marquee">
            <span>
              tools: JAVASCRIPT, HTML/CSS, RUBY ON RAILS, figma, adobe suite, currently learning: react.js
            </span>
          </p>
      </div>
    </div>
    <div className="Cards" id="Projects">
      <h2>Examples of my work</h2>
          <Projects />
    </div>
    <div id="About">
      <Section
          image={require('../images/bg.jpg')}
          logo={require('../images/av.png')}
          title="About me"
          text="I'm a frontend developer and designer based in Madrid. I graduated from UC Berkeley in 2017 and since have studied design at the Instituto Europeo di Design and learned to code using tools such as React.js, Ruby on Rails, Javascript and HTML/CSS. I'm passionate about the intersection of design and development. My mission is to create and contribute to projects that create a better human experience."
        />
    </div>

  </Layout>
)

export default IndexPage

