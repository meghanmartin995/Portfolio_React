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
      </div>
      <Wave />
    </div>
    <div id="About">
      <Section
          image={require('../images/bg.jpg')}
          logo={require('../images/av.png')}
          title="About me"
          text="I'm a frontend developer and designer currently based in Madrid, Spain. I'm passionate about the intersection of design and development. My mission as a developer is to create and contribute to projects that create a better human experience. I graduated from UC Berkeley in 2017 and since have studied design at the Instituto Europeo di Design and learned to code using tools such as React.js, Ruby on Rails, Javascript and HTML/CSS."
        />
      </div>
      <div className="Cards" id="Projects">
        <h2>Examples of my work</h2>
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
              title="Machine Learning"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Contentful"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Stock Organizer"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Thrive"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Lucid"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Replastic"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Moodfood"
              text="Description"
              image={require('../images/bg.jpg')} />
            <Card
              title="Lucid"
              text="Description"
              image={require('../images/bg.jpg')} />
          </div>
      </div>


  </Layout>
)

export default IndexPage

