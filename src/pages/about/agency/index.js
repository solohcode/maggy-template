import { Steps } from 'antd'
import React from 'react'
import { Fade } from 'react-reveal'

function AgencyPage() {
  return (
    <div className='w-100'>
      <div className='w-100 p-0 m-0'>
        <div className='row p-0 m-0 position-relative'>

          <div className='col-md-6 p-0 m-0'>
            <Fade big>
              <div className='agency_parent w-100 position-relative'>
                <div className='position-absolute bottom-0 w-100 px-2 px-md-5'>
                  <div className='text-center'>
                    <Fade bottom>
                      <p className='fs-100p text-white fw-bold m-0'>
                        ABOUT US
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-md-6 p-0 m-0'>
            <div className='w-100 vh-100 overflow-y pt-5'>
              <div className='container pt-5 px-md-5'>

                <div>
                  <p className='fs-5 fw-bold label-arrow text-red'> <span className='pt-4'>About Us</span></p>
                  <p className='fs-40p fw-bold lh-sm'>
                    We’re a Digital Experience <br/>
                    Development Agency
                  </p>
                  <p className='ff-josefin fs-6'>
                    We Design & Build Brands. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>

                <div className='w-100'>
                  <div>
                    <Steps direction="vertical">
                      <Steps.Step 
                        title={<p className='fs-4 fw-bold'>Experience</p>}
                        icon={<img alt='maggy' src='/resources/images/agency/agency-top.png' />} 
                      />
                      <Steps.Step 
                        title="Finished" 
                        description="This is a description." 
                        icon={<img alt='maggy' src='/resources/images/agency/agency-1.png' />} 
                      />
                      <Steps.Step 
                        title="Finished" 
                        description="This is a description." 
                        icon={<img alt='maggy' src='/resources/images/agency/agency-2.png' />} 
                      />
                    </Steps>
                  </div>

                  <Fade bottom>
                    <div className='text-secondary'>
                      <img alt='maggy' src='/resources/images/agency/agency.webp' className='img-fluid' />
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

export default AgencyPage