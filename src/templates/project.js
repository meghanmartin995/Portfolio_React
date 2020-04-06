import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import "../components/project.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
      frontmatter {
        title
      }
      html
    }
  }
`
const Project = (props) => {
  return (

      <div className="Project">
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
        </div>
      </div>


  )
}

export default Project
