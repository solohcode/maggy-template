import React from 'react'
import { Fade } from 'react-reveal'
import ColListingCard from '../../../components/cards/listing/colListingCard'
import Footer from '../../../components/footer'

function TravelPage1() {
  const imgPath = "/resources/images/travel/travel-1/"
  const { category, url, content } = {
    category: "Travel",
    url: "single-post",
    content: "In this post, we are going to highlight the many benefits of blogging for business ..."
  }

  const posts = [
    {
      id: 1,
      img: `${imgPath}1.webp`,
      title: "Best Places to visit in the World",
      category,
      url,
      content,
    },
    {
      id: 2,
      img: `${imgPath}2.webp`,
      title: "Where can People travel right now?",
      category,
      url,
      content,
    },
    {
      id: 3,
      img: `${imgPath}3.webp`,
      title: "What is the best about Traveling?",
      category,
      url,
      content,
    },
    {
      id: 4,
      img: `${imgPath}4.webp`,
      title: "What are the best countries to visit?",
      category,
      url,
      content,
    },
    {
      id: 5,
      img: `${imgPath}5.webp`,
      title: "What do you Gain from Traveling?",
      category,
      url,
      content,
    },
    {
      id: 6,
      img: `${imgPath}6.webp`,
      title: "How much will it Cost to Travel?",
      category,
      url,
      content,
    },
  ]
  return (
    <div className='w-100'>
      <div className='w-100 p-0 m-0'>
        <div className='row p-0 m-0 position-relative'>

          <div className='col-md-6 p-0 m-0'>
            <Fade big>
              <div className='travel_1_parent w-100 position-relative'>
                <div className='position-absolute bottom-0 w-100 px-2 px-md-5'>
                  <div className='w-100 d-flex justify-content-between text-white'>
                    <div className=''>
                      <Fade big>
                        <p className='fs-50p fw-bold lh-1'>
                          Travel <br/> Magazine.
                        </p>
                      </Fade>
                    </div>
                    <div className='pt-3'>
                      <Fade big>
                        <img alt='maggy' src='/resources/icons/pop-yellow.webp' className='img-fluid' />
                      </Fade>
                    </div>
                  </div>
                  <div className='text-white'>
                    <Footer />
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-md-6 p-0 m-0'>
            <div className='w-100 vh-100 overflow-y'>
              <div className='w-100'>
                <div className='w-100'>
                  <div className='fs-40p fw-bold py-5 px-md-4 lh-sm'>
                    <span>We Travel Not to Escape Life</span>
                    <span className='text-red ms-3'>But <br/> for Life not to Escape Us</span>
                  </div>
                </div>
              </div>
              <div className='container pt-5 px-md-5'>
                <div className='w-100'>
                  <ColListingCard
                    data={posts}
                    col={{
                      lg: "6",
                      md: "6",
                    }}
                    text={{
                      color: "text-dark",
                      titleSize: "3",
                      lh: "sm"
                    }}
                  />
                </div>

                <div className='w-100'>
                  <Fade bottom>
                    <div className='my-5 mx-auto ff-josefin d-flex justify-content-center'>
                      <button className='mx-2 btn btn-dark rounded-circle px-3'>1</button>
                      <button className='mx-2 border-0 bg-transparent hover-red'>2</button>
                      <button className='mx-2 border-0 bg-transparent hover-red'>3</button>
                      <button className='mx-2 border-0 bg-transparent hover-red'>NEXT</button>
                    </div>
                  </Fade>

                  <Fade bottom>
                    <div className='text-center pb-5'>
                      <p className='fs-50p fw-bold lh-1'>
                        Follow us on <span className='text-red'>Instagram</span><br />
                        Our journey of Love
                      </p>
                      <a href='#travel-1'>
                        <img alt='maggy' src='/resources/icons/instagram.webp' />
                      </a>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TravelPage1