import React from 'react'
import { Fade } from 'react-reveal'
import DiceListing from '../../../components/cards/listing/diceListing'
import Footer from '../../../components/footer'

function FashionPage1() {
  const imgPath = "/resources/images/fashion/fashion-1/"
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
      content
    },
    {
      id: 2,
      img: `${imgPath}2.webp`,
      title: "Where can People travel right now?",
      category,
      url,
      content
    },
    {
      id: 3,
      img: `${imgPath}3.webp`,
      title: "What is the best about Traveling?",
      category,
      url,
      content
    },
    {
      id: 4,
      img: `${imgPath}4.webp`,
      title: "What are the best countries to visit?",
      category,
      url,
      content
    },
    {
      id: 5,
      img: `${imgPath}5.webp`,
      title: "What do you Gain from Traveling?",
      category,
      url,
      content
    },
    {
      id: 6,
      img: `${imgPath}6.webp`,
      title: "How much will it Cost to Travel?",
      category,
      url,
      content
    },
  ]
  return (
    <div className='w-100 bg-black text-white'>
      <div className='w-100 p-0 m-0'>
        <div className='row p-0 m-0 position-relative'>

          <div className='col-md-6 p-0 m-0'>
            <Fade big>
              <div className='fashion_1_parent w-100 position-relative'>
                <div className='position-absolute bottom-0 w-100 px-2 px-md-5'>
                  <div className='text-center'>
                    <Fade big>
                      <p className='fs-100p text-red fw-bold m-0'>
                        MAGIC
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-md-6 p-0 m-0'>
            <div className='w-100 vh-100 overflow-y pt-5'>
              <div className='container pt-5 px-md-4'>
                <div className='w-100'>
                  <DiceListing 
                    data={posts}
                    imgClass="h-200p"
                    text={{
                      color: "text-white",
                      titleSize: "3",
                      lh: "sm"
                    }}
                  />
                </div>

                <div className='w-100'>
                  <Fade bottom>
                    <div className='my-5 mx-auto ff-josefin d-flex justify-content-center text-red'>
                      <button className='mx-2 btn btn-danger rounded-circle px-3 text-dark'>1</button>
                      <button className='mx-2 border-0 bg-transparent'>2</button>
                      <button className='mx-2 border-0 bg-transparent'>NEXT</button>
                    </div>
                  </Fade>

                  <Fade bottom>
                    <div className='text-center pb-5'>
                      <p className='fs-50p fw-bold lh-1'>
                        FASHION <br />
                        MAGAZINE
                      </p>
                      <p className='fs-20p lh-sm ff-josefin'>
                        FOLLOW US <br/>
                        ON INSTAGRAM
                      </p>
                      <a href='#travel-1'>
                        <img alt='maggy' src='/resources/icons/instagram.webp' />
                      </a>
                    </div>
                  </Fade>

                  <Fade bottom>
                    <div className='text-secondary'>
                      <Footer />
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

export default FashionPage1