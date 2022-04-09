import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid wrapper">
    <a className="navbar-brand logo hover-underline-animation" href="#">Taylan Can Köse</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse item-wrapper" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link home-nav" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link portfolio-nav" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link blog-nav">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link about-nav">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar

