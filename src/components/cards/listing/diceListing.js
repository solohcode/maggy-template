import React from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

function DiceListing({
  data,
  imgClass,
  text
}) {
  return (
    <div className='w-100'>
       <div className='row'>
          {
            data?.map((n, index) => {
              return (
                <>
                  {
                    index%2 === 0 ? (
                      <Link to={n?.url || "/"} key={n?.id} className='col-12 col-sm-12 col-md-12 my-2'>
                        <Fade bottom>
                          <div key={n?.id} className='row d-flex'>
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
                          </div>
                        </Fade>
                      </Link>
                    ) : (
                      <Link to={n?.url || "/"} key={n?.id} className='col-12 col-sm-12 col-md-12 my-2'>
                        <Fade bottom>
                          <div key={n?.id} className='row d-flex'>
                            <div className='col-12 col-md-6'>
                              <div className={`py-3 ${text?.color}`}>
                                <Link to={n?.url || "/"} className='ff-josefin text-red'>{n?.category}</Link>
                                <p className={`fs-${text?.titleSize} ff-${text?.titleFont} lh-${text?.lh} fw-${text?.titleBold || "bold"}`}>{n?.title}</p>
                                <p className={`ff-${text?.textFont || "josefin"} fs-${text?.textSize || "6"}`}>{n?.content}</p>
                              </div>
                            </div>
                            <div className='col-12 col-md-6'>
                              <img alt='maggy' src={n?.img} className={`w-100 img-fluid ${imgClass}`} />
                            </div>
                          </div>
                        </Fade>
                      </Link>
                    )
                  }
                </>
              )
            })
          }
        </div>
    </div>
  )
}

export default DiceListing