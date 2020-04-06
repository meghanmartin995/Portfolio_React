import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import './Card.css'
import Img from "gatsby-image"


const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              text
              image {
                childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)



    return (
      <div className="CardGroup">
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
            <div className="Card">
              <Link to={`${edge.node.fields.slug}`}>
              <img src={edge.node.frontmatter.image.childImageSharp.fluid.src} />
              <div className="CardText">
                <h3> {edge.node.frontmatter.title} </h3>
                <p> {edge.node.frontmatter.text} </p>
              </div>
              </Link>
            </div>
        )
      })}
      </div>
    )
}

export default Projects



