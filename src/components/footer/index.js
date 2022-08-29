import { DribbbleOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import React from 'react'
import { Fade } from 'react-reveal'
import { CgTwitter } from 'react-icons/cg'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='w-100'>
      <div className='w-100 d-flex justify-content-between pb-4'>
        <div className=''>
          <Fade big>
            <b className='ff-josefin'>
              © {year} Maggy - All Rights Reserved.
            </b>
          </Fade>
        </div>
        <div className='w-auto'>
          <Fade big>
            <div className='d-flex justify-content-between'>
              <span className='mx-1'>
                <TwitterOutlined />
              </span>
              <span className='mx-1'>
                <CgTwitter />
              </span>
              <span className='mx-1'>
                <DribbbleOutlined />
              </span>
              <span className='mx-1'>
                <InstagramOutlined />
              </span>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Footer