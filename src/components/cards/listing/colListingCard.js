import React from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

function ColListingCard({
  data,
  col,
  imgClass,
  text
}) {
  return (
    <div className='w-100'>
      <div className='row'>
        {
          data?.map((n) => (
            <Link key={n?.id} to={n?.url || "/"} className={`col-12 col-sm-${col?.sm} col-md-${col?.md} col-lg-${col?.lg} text-decoration-none`}>
              <Fade bottom>
                <div className='w-100'>
                  <Fade big>
                    <div className='w-100'>
                      <img alt='maggy' src={n?.img} className={`w-100 img-fluid ${imgClass}`} />
                    </div>
                  </Fade>
                  <div className={`py-3 ${text?.color}`}>
                    <Link to={n?.url || "/"} className='ff-josefin text-red'>{n?.category}</Link>
                    <p className={`fs-${text?.titleSize} ff-${text?.titleFont} lh-${text?.lh} fw-${text?.titleBold || "bold"}`}>{n?.title}</p>
                    <p className={`ff-${text?.textFont || "josefin"} fs-${text?.textSize || "6"}`}>{n?.content}</p>
                  </div>
                </div>
              </Fade>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default ColListingCard