import React from 'react'
import './Card.css'
import { Link } from "gatsby"
import Image from 'gatsby-image'

const Card = props => (

  <div className="Card">
    <Link to="{`/page-2/`}">
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </Link>
  </div>

  )

  export default Card
