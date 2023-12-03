import React from 'react'

const blog = () => {
  return (
<main>
  <section className='Sub-header'>
<nav>
            <a href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks">
                {/* <!-- reposnive bar open and close --> */}
                <i className="fa fa-times" ></i>
                {/* onclick="hideMenu()" */}
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/course">Course</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <i className="fa fa-bars" ></i>
            {/* onclick="showMenu()" */}
            {/* <!-- reposnive bar open and close --> */}
        </nav>
        </section>
</main>
  )
}

export default blog
