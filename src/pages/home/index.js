import React from 'react'
import DemoCard from '../../components/cards/demo'

function DemoPage() {
  const imgPath = "/resources/images/"
  const cards = [
    {
      id: 1,
      theme: "dark",
      title: "Travel. Demo 1",
      img: `${imgPath}travel/travel-1.webp`,
      url: "/travel-1"
    },
    {
      id: 2,
      theme: "light",
      title: "Travel. Demo 2",
      img: `${imgPath}travel/travel-2.webp`,
      url: "/travel-2"
    },
    {
      id: 3,
      theme: "light",
      title: "Fashion. Demo 1",
      img: `${imgPath}fashion/fashion-1.webp`,
      url: "/fashion-1"
    },
    {
      id: 4,
      theme: "dark",
      title: "Fashion. Demo 2",
      img: `${imgPath}fashion/fashion-2.webp`,
      url: "/fashion-2"
    },
    {
      id: 5,
      theme: "dark",
      title: "Lifestyle. Demo 1",
      img: `${imgPath}lifestyle/lifestyle-1.webp`,
      url: "/lifestyle-1"
    },
    {
      id: 6,
      theme: "light",
      title: "Lifestyle. Demo 2",
      img: `${imgPath}lifestyle/lifestyle-2.webp`,
      url: "/lifestyle-2"
    },
  ]
  return (
    <div className='w-100 ff-playfair'>
      <div className='container-fluid m-0 p-0'>
        <div className='row p-0'>
          {
            cards.map((val) => (
              <div key={val.id} className='col-md-6 p-0 h-590p'>
                <DemoCard 
                  theme={val.theme}
                  title={val.title}
                  img={val.img}
                  url={val.url}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DemoPage