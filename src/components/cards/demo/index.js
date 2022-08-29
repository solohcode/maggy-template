import React from 'react'
import { Fade } from 'react-reveal';
import { Link } from "react-router-dom";

function DemoCard({
  theme,
  title,
  url,
  img,
  children
}) {
  return (
    <Link to={url || '/'} className='w-100 h-100 text-decoration-none'>
      <div className={`w-100 h-100 pt-5 bg-${theme === "dark" ? "black" : "white"} text-${theme === "dark" ? "white" : "black"}`}>
        <div className='w-100 text-center my-auto pt-5'>
          <Fade big>
            <p className='fs-2 fw-bold py-5'>{title}</p>
          </Fade>
          <Fade bottom>
            <div>
              {
                img && (
                  <img 
                    alt='maggy' 
                    src={img} 
                    className="w-60 mx-auto img-fluid"
                  />
                )
              }
              {children}
            </div>
          </Fade>
        </div>
      </div>
    </Link>
  )
}

export default DemoCard