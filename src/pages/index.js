import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';


const IndexPage = () => (
  <Layout style={{ cursor: `url(../images/cursor.png'), auto` }}>
    <SEO title="Home" />

    <div className="Hero">
      <div className="HeroGroup">
        <h1>hi, i'm <span>meghan</span></h1>
        <p>front-end developer + designer </p>
          <p className="Marquee">
            <span>
              tools: REACT.JS, RUBY ON RAILS, JAVASCRIPT,  HTML/CSS, figma, adobe suite
            </span>
          </p>
      </div>
    </div>
      <div className="Cards" id="Projects">
        <h2>Examples of my work</h2>
          <div className="CardGroup">
            <Card
              title="Fancier"
              text="two-sided marketplace for festival clothing"
              image={require('../images/bg.jpg')} />
            <Card
              title="Altura"
              text="online marketplace for private jets"
              image={require('../images/bg.jpg')} />

            <Card
              title="Malpensatina"
              text="informational website for tuscan farmhouse"
              image={require('../images/bg.jpg')} />
            <Card
              title="Image Search"
              text="unsplash api"
              image={require('../images/bg.jpg')} />
            <Card
              title="Machine Learning"
              text="facial recognition scripts"
              image={require('../images/bg.jpg')} />
            <Card
              title="Contentful"
              text="restaurant website connected to contentful cms"
              image={require('../images/bg.jpg')} />
            <Card
              title="Stock Organizer"
              text="web app to organize your stocks on a dashboard"
              image={require('../images/bg.jpg')} />
            <Card
              title="Thrive"
              text="b2b sustainable technology platform"
              image={require('../images/bg.jpg')} />
            <Card
              title="Lucid"
              text="conversation cards about the future of humanity"
              image={require('../images/bg.jpg')} />
            <Card
              title="Replastic"
              text="a manual for indigenous communities to upcycle plastic"
              image={require('../images/bg.jpg')} />
            <Card
              title="Moodfood"
              text="nutrition data visualizations"
              image={require('../images/bg.jpg')} />
            <Card
              title="projectX"
              text="Description"
              image={require('../images/bg.jpg')} />
          </div>
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

