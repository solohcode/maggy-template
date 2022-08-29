import React from 'react'
import { Carousel } from 'antd'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

function CarouselListCard({
  data,
  text,
  imgClass
}) {
  return (
    <div>
      <Fade bottom>
        <div className='my-5'>
          <Carousel autoplay className='text-white container'>
            {
              data.map((n) => (
                <Link to={n?.url || "/"} key={n?.id} className='row d-flex'>
                  <div className='col-12 col-md-6'>
                    <img alt='maggy' src={n?.img} className={`w-100 img-fluid ${imgClass}`} />
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className={`py-3 ${text?.color}`}>
                      <Link to={n?.url || "/"} className='ff-josefin text-red'>{n?.category}</Link>
                      <p className={`fs-${text?.titleSize} ff-${text?.titleFont} lh-${text?.lh} fw-${text?.titleBold || "bold"}`}>{n?.title}</p>
                      <p className={`ff-${text?.textFont || "josefin"} fs-${text?.textSize || "6"}`}>{n?.content}</p>
                    </div>
                  </div>
                </Link>
              ))
            }
          </Carousel>
        </div>
      </Fade>
    </div>
  )
}

export default CarouselListCard