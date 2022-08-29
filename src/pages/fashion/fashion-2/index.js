import React from 'react'
import { Fade } from 'react-reveal'
import CarouselListCard from '../../../components/cards/listing/carouselList'
import ColListingCard from '../../../components/cards/listing/colListingCard'
import Footer from '../../../components/footer'

function FashionPage2() {
  const { category, url, content } = {
    category: "Fashion",
    url: "single-post",
    content: "In this post, we are going to highlight the many benefits of blogging for business ..."
  }
  const imgPath = "/resources/images/fashion/fashion-2/"
  const posts = [
    {
      id: 1,
      img: `${imgPath}1.webp`,
      title: "Best Places to visit in the World",
      category,
      url,
    },
    {
      id: 2,
      img: `${imgPath}2.webp`,
      title: "Where can People travel right now?",
      category,
      url,
    },
    {
      id: 3,
      img: `${imgPath}3.webp`,
      title: "What is the best about Traveling?",
      category,
      url,
    },
    {
      id: 4,
      img: `${imgPath}4.webp`,
      title: "What are the best countries to visit?",
      category,
      url,
    },
    {
      id: 5,
      img: `${imgPath}5.webp`,
      title: "What do you Gain from Traveling?",
      category,
      url,
    },
    {
      id: 6,
      img: `${imgPath}6.webp`,
      title: "How much will it Cost to Travel?",
      category,
      url,
    },
    {
      id: 7,
      img: `${imgPath}7.webp`,
      title: "What are the best countries to visit?",
      category,
      url,
    },
    {
      id: 8,
      img: `${imgPath}8.webp`,
      title: "What do you Gain from Traveling?",
      category,
      url,
    },
    {
      id: 9,
      img: `${imgPath}9.webp`,
      title: "How much will it Cost to Travel?",
      category,
      url,
    },
  ]


  const imgPath2 = "/resources/images/fashion/fashion-1/"
  const carouselPost = [
    {
      id: 1,
      img: `${imgPath2}1.webp`,
      title: "Best Places to visit in the World",
      category,
      url,
      content
    },
    {
      id: 2,
      img: `${imgPath2}2.webp`,
      title: "Where can People travel right now?",
      category,
      url,
      content
    },
    {
      id: 3,
      img: `${imgPath2}3.webp`,
      title: "What is the best about Traveling?",
      category,
      url,
      content
    },
    {
      id: 4,
      img: `${imgPath2}4.webp`,
      title: "What are the best countries to visit?",
      category,
      url,
      content
    },
    {
      id: 5,
      img: `${imgPath2}5.webp`,
      title: "What do you Gain from Traveling?",
      category,
      url,
      content
    },
    {
      id: 6,
      img: `${imgPath2}6.webp`,
      title: "How much will it Cost to Travel?",
      category,
      url,
      content
    },
  ]
  return (
    <div className='w-100'>
      <div className='w-100 p-0 m-0'>
        <div className='row p-0 m-0 position-relative'>

          <div className='col-md-6 p-0 m-0'>
            <Fade big>
              <div className='fashion_2_parent w-100 position-relative text-white'>
                <div className='position-absolute bottom-0 w-100 px-2 px-md-5'>
                  <div className='w-100'>
                    <Fade left>
                      <div>
                        <p className='m-0 fs-50p fw-bold lh-1'>
                          YOU CAN <br />
                          CHANGE <br />
                          THE WORLD
                        </p>
                        <p className='ff-josefin fs-6 pt-3 m-0 lh-sm'>
                          How Women are Redirecting Hollywood
                        </p>
                        <p className='ff-josefin fs-6 pt-3 text-red'>
                          By Jasmin Smith
                        </p>
                      </div>
                    </Fade>
                  </div>
                  <div className='w-100 d-flex justify-content-between text-white'>
                    <div className='pt-5'>
                      <Fade big>
                        <img alt='maggy' src='/resources/icons/qr-code.webp' className='img-fluid' />
                      </Fade>
                    </div>
                    <div className='text-end'>
                      <Fade right>
                        <div>
                          <p className='m-0 fs-50p fw-bold lh-1'>
                            STRONG <br />
                            STYLE
                          </p>
                          <p className='ff-josefin fs-6 pt-3 m-0 lh-sm'>
                            New Ways to Wear Denim <br />
                            Belt Bags make a Comeback
                          </p>
                          <p className='ff-josefin fs-6 pt-3 text-red m-0'>
                            How to Shop Mindfully
                          </p>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-md-6 p-0 m-0'>
            <div className='w-100 vh-100 overflow-y pt-5'>
              <div className='container pt-5 px-md-4'>
                <div className='w-100'>
                  <ColListingCard
                    data={posts}
                    imgClass="h-200p"
                    col={{
                      lg: "4",
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
                  <div>
                    <CarouselListCard
                      data={carouselPost}
                      imgClass="h-250p"
                      text={{
                        color: "text-dark",
                        titleSize: "3",
                        lh: "sm"
                      }}
                    />
                  </div>

                  <Fade bottom>
                    <Footer />
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

export default FashionPage2