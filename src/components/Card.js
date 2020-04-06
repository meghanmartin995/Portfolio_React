import React from 'react'
import './Card.css'
import { Link } from "gatsby"
import Image from 'gatsby-image'

const Card = props => (

  <div className="Card">
    <Link to="{`/page-2/`}">
      <img src={props.image} />
      <div className="CardText">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </Link>
  </div>

  )

  export default Card
