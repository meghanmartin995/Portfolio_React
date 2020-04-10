import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Wave from '../components/Wave';
import { Link } from "gatsby"
import "../components/Project.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
      frontmatter {
        title
        text
        challenge
        role
        result
        process
        tools
        link
        video
        credits
        image {
          childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
          }
        }
        image1 {
          childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
          }
        }
       }
        image2 {
          childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
          }
        }
       }
        image3 {
          childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
        }
      }
      }
      html
    }
  }
`
const Project = (props) => {
  return (
    <Layout>

      <div className="Project">
        <div className="ProjectText">
          <h1>{props.data.markdownRemark.frontmatter.challenge} </h1>
          <div className="ProjectText">
            <p><span>Role:</span> {props.data.markdownRemark.frontmatter.role}</p>
            <p><span>Tools:</span> {props.data.markdownRemark.frontmatter.tools}</p>
            <p><span>Credits:</span> {props.data.markdownRemark.frontmatter.credits}</p>
          </div>
        </div>
      </div>
      <div className="Process">
        <Wave />
        <div className="Gif" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
        </div>
        <h2>solution</h2>
        <p>{props.data.markdownRemark.frontmatter.result}</p>

        <h2>process</h2>
        <p>{props.data.markdownRemark.frontmatter.process}</p>
        <div className="ProjectGrid">
          <div className="GridItem">
            <h3>Research</h3>
            <img src={props.data.markdownRemark.frontmatter.image1.childImageSharp.fluid.src} />
          </div>
          <div className="GridItem">
            <h3>Prototyping</h3>
            <img src={props.data.markdownRemark.frontmatter.image2.childImageSharp.fluid.src} />
          </div>
          <div className="GridItem">
            <h3>Development</h3>
            <img src={props.data.markdownRemark.frontmatter.image3.childImageSharp.fluid.src} />
          </div>
        </div>
      </div>
      <div className="NextProject">
        <a href={props.data.markdownRemark.frontmatter.link}> <i class="fas fa-chevron-circle-right"></i></a>
      </div>
    </Layout>
  )
}

export default Project
