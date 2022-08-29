import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { Fade } from 'react-reveal';
import { Link, useLocation } from "react-router-dom";
import "./index.scss"

function FullScreenNav() {
  const [navOpen, setNavOpen] = useState(false)
  const [navLink, setNavLink] = useState({
    id: 0,
    show: false
  })
  const {pathname} = useLocation()
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }
  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }
  
  const handleNav = () => {
    if(!navOpen){
      openNav()
    }else {
      closeNav()
    }
    setNavOpen(!navOpen)
    setNavLink({
      id: 0,
      show: false
    })
  }

  const links = [
    {
      id: 1,
      title: "Demo",
      url: "/" || "/home",
    },
    {
      id: 2,
      title: "Travel",
      url: [
        {
          id: 2.1,
          title: "Travel. Demo 1",
          url: "/travel-1"
        },
        {
          id: 2.2,
          title: "Travel. Demo 2",
          url: "/travel-2"
        },
      ],
    },
    {
      id: 3,
      title: "Fashion",
      url: [
        {
          id: 3.1,
          title: "Fashion. Demo 1",
          url: "/fashion-1"
        },
        {
          id: 3.2,
          title: "Fashion. Demo 2",
          url: "/fashion-2"
        },
      ],
    },
    {
      id: 4,
      title: "Lifestyle",
      url: [
        {
          id: 4.1,
          title: "Lifestyle. Demo 1",
          url: "/lifestyle-1"
        },
        {
          id: 4.2,
          title: "Lifestyle. Demo 2",
          url: "/lifestyle-2"
        },
      ],
    },
    {
      id: 5,
      title: "About Us",
      url: [
        {
          id: 5.1,
          title: "Agency",
          url: "/agency"
        },
        {
          id: 5.2,
          title: "Personal",
          url: "/personal"
        },
      ],
    },
    {
      id: 6,
      title: "Contact",
      url: "/contact",
    },
  ]

  return (
    <div className='w-100 h-100 position-relative'>
      <div id="myNav" className="overlay">
        <div className="overlay-content w-50 px-md-5 mx-auto custom-scroll">
          <div className='w-100 h-350p px-lg-5 overflow-auto custom-scroll ff-playfair fw-bold'>
              <div class="navbar-nav px-lg-5 custom-scroll">
                <Fade right>
                  <div className='navbar-nav text-white'>
                    {
                      links.map((e) => (
                        Array.isArray(e.url) ? (
                          <div key={e.id} className="d-block nav-item w-100">
                            <button className='w-100 fs-1 nav-link nav-item d-flex justify-content-between border-0 bg-transparent px-1 py-0' onClick={() => setNavLink({id: e.id, show: navLink.id === e.id ? !navLink.show : true})}>
                              <span className='nav-link'>{e.title}</span>
                              <div className='fs-6 pt-4'>
                                {
                                  navLink.id === e.id && navLink.show ? 
                                  <CaretUpOutlined /> :
                                  <CaretDownOutlined />
                                }
                              </div>
                            </button>
                            <div className={`px-3 d-${navLink.id === e.id && navLink.show ? "block" : "none"}`}>
                              {
                                e.url.map((n) => (
                                  <Fade left>
                                    <Link className={`nav-link fs-3 text-${n.url === pathname && "red"}`} to={n.url} key={n.id} onClick={handleNav}>{n.title}</Link>
                                  </Fade>
                                ))
                              }
                            </div>
                          </div>
                        ) : (
                          <div className="nav-item">
                            <Link className={`nav-link fs-1 text-${e.url === pathname ? "red" : "white"}`} to={e.url} key={e.id} onClick={handleNav}>{e.title}</Link>
                          </div>
                        )
                      ))
                    }
                  </div>
                </Fade>
              </div>
          </div>
        </div>
      </div>

      <div className='w-140p position-fixed z-index-top top-30p left-30p'>
        <div className='d-flex h-70p'>
          <button className='w-50 h-100 border-0 bg-transparent p-0' onClick={handleNav}>
            <img alt='maggy' src={`/resources/icons/${navOpen? "bar-close" : "bar"}.png`} className='w-100 h-100 img-fluid' />
          </button>
          <div className='w-50 h-100 bg-white text-center pt-2 px-0'>
            <p className='fs-1 ff-playfair fw-bold text-black'>M</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav