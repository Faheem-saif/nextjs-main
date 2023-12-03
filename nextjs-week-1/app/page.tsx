// 'use client'
// import Image from 'next/image'
// import { useEffect, useState } from 'react'

// export default function Home() { 


 
  
//   const [name,setname] =useState('----------------')
//  const namefun =( ) => {
 
//   setname("Faheem Saif")
//  }

// const [value,setvalue]= useState('Start')
// const namefunn=() =>{
//   setvalue("End")
// }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//      <h1 className=''>HTML tags assignment</h1>
//      <h2>Faheem Saif</h2>
//      <h3>PIAIC student</h3>
//      <p>Hello <br/>
//       I m Faheem.
      
//      </p>
//      <img src="https://www.panaverse.co/red-p-logo-text_dao_croped.png" alt="" />
   

//      <label >
//       <b> <u>Piaic Fellows</u></b>
//      <ul>
     
//       <ol><b>Faheem</b></ol>
//       <ol><b>Zafeer</b></ol>
//       <ol><b>Ali hamza</b></ol>
//       <ol><b>Manan Tahir</b></ol>
    
//      </ul>
//      </label>

     
//      <h1>My Name is {name}</h1>
//      <h1>Here The Value Output is {value}</h1>
//      <button onClick={namefun}>Get Full Name</button>
//      <button onClick={namefunn}>Get Full value</button>

     

     

// {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/cBg6xA5C60s?si=250817HmSA5InwS_" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}

//     </main>
//   )
// }
import Image from 'next/image'
import Link from 'next/link'    

export default function Home() {
  return (
    <main >


    <section className="header">
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

        <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
    </section>

  
    <section className="course">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="course-col">
                <h3>Undergraduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div className="course-col">
                <h3>Graduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div className="course-col">
                <h3>Adult Learning & Degree Completion</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
        </div>
    </section>


    <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="campus-col">
                <img src="../public/img/Campus1.png" alt=""/>
                <div className="layer">
                    <h3>DELHI</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src="../public/img/Campus2.png" alt=""/>
                <div className="layer">
                    <h3>HYDERABAD</h3>
                </div>
            </div>
            ima
            <div className="campus-col">
                <img src="../public/img/Campus3.png" alt=""/>
                <div className="layer">
                    <h3>MUMBAI</h3>
                </div>
            </div>
        </div>
    </section>
 
    <section className="facilities">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="facilities-col">
                <img src="../public/img/libary.png" alt=""/>
                <h3>Best Libary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <img src="../public/img/playground.png" alt=""/>
                <h3>Athletics</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <img src="../public/img/food.png" alt=""/>
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>

    <section className="testimonials">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="testimonials-col">
                <img src="../public/img/user.png" alt="oo.."/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="testimonials-col">
                <img src="../public/img/user.png" alt="oo.."/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                </div>
            </div>
        </div>
    </section>

    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" className="hero_btn">CONTACT US</a>
    </section>
 

    <section className="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
        </p>

        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        <p>Made with <i className="fas fa-heart"></i> by <a href="index.html">Sagar Developer</a></p>
        <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
    </section>
  

    </main> 
    ) 
  }
