import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi, I'm Meghan</h1>
        <p>Developer + Designer | React.js, Ruby on Rails, Javascript, HTML/CSS</p>
        <Link to="/page-2/">Projects</Link>
      </div>
      <Wave />
    </div>
      <div className="Cards">
        <h2>Projects I've been working on</h2>
          <div className="CardGroup">
            <Card
              title="Fancier"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Altura"
              text="Description"
              image={require('../images/bg.jpg')} />

            <Card
              title="Malpensatina"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Image Search"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Image Search"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Image Search"
              text="Description"
              image={require('../images/bg.jpg')} />
          </div>
      </div>
      <Section
        image={require('../images/bg.jpg')}
        logo={require('../images/av.png')}
        title="About me"
        text="I'm passionate about the intersection of design and development. My mission as a developer is to create and contribute to projects that create a better human experience."
      />

  </Layout>
)

export default IndexPage

