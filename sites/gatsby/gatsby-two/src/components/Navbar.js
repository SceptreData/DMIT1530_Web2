import React from "react"
import "./navbar.css"

const Navbar = props => {
  let makeLink = linkObj => {
    return <li>{linkObj.link}</li>
  }

  return (
    <nav className="site-nav">
      <ul className="list-view">{props.links.map(link => makeLink(link))}</ul>
    </nav>
  )
}

export default Navbar
