import React from 'react'
import Wrapper from '../utilities/Wrapper'
import './Contact.css'

const Contact = () => {
  return (
    <Wrapper>
      <div className='container contact-form d-flex flex-column'>
        <div className='d-flex justify-content-center'>
          <div className='heading '>
            <h1 className='contact'>Contact</h1>
            <h2 className='message'>Message Me</h2>
          </div>
        </div>
        <div className='row container mt-4'>
          <div className='col-12 col-md-6 form-section container'>
            <form action=''>
              <div class='row '>
                <div class='col-12 col-lg-6 '>
                  <div className='form-group'>
                    <input
                      type='email'
                      class='form-control'
                      placeholder='Your Email'
                      aria-label='Email'
                    />
                  </div>
                </div>
                <div class='col-12 col-lg-6  '>
                  <div className='form-group'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Your Name'
                      aria-label='Name'
                    />
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Your Subject'
                  />
                </div>
              </div>
              <div className='col-12 '>
                <div className='form-group'>
                  <textarea
                    rows='6'
                    class='form-control'
                    placeholder='Your Message'
                  />
                </div>
              </div>
            </form>
          </div>
          <div className='summary mt-3  col-12  col-lg-6 d-flex flex-column align-items-center'>
            <h2 className='text-info strong fs-4'>HOW CAN I HELP?</h2>
            <p className='container text-light fs-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              modi cum vero accusantium labore, dolore quam sint in suscipit
              sequi perferendis! Sequi at nisi tempora unde distinctio numquam
              quo velit. Placeat amet aliquam ex tenetur sit, alias eos maiores
              a, porro magnam reprehenderit beatae voluptates, molestiae
              repellendus. Dolorem, maxime eaque temporibus veniam assumenda
              consequatur quisquam veritatis ducimus velit numquam? Sapiente.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
