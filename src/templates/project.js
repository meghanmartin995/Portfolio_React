import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import "../components/project.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
      frontmatter {
        title
        text
        role
        tools
        credits
        image {
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
        <img src={props.data.markdownRemark.frontmatter.image.childImageSharp.fluid.src} />
        <div className="ProjectText">
          <h1>{props.data.markdownRemark.frontmatter.title} </h1>
          <p> Role: {props.data.markdownRemark.frontmatter.role}</p>
          <p> Tools: {props.data.markdownRemark.frontmatter.tools}</p>
          <p> Credits: {props.data.markdownRemark.frontmatter.credits}</p>
        </div>
      </div>
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
        </div>
    </Layout>
  )
}

export default Project
