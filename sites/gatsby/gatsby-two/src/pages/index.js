import React from "react"
import Navbar from "../components/Navbar"
// import links from "../"

const IndexPage = () => {
  let appData = null

  fetch("http://localhost:8000/static/links.json")
    .then(response => response.json())
    .then(links => (appData = JSON.stringify(links)))

  return (
    <>
      <Navbar links={appData} />
      <h1>The future is now...</h1>
    </>
  )
}

export default IndexPage
