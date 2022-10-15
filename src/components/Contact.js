import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='container d-flex justify-content-center'>
        <div className='heading '>
          <h1 className='contact'>Contact</h1>
          <h2 className='message'>Message Me</h2>
        </div>
      </div>
      <div className='form-section container'>
        <form action=''>
          <div class='row '>
            <div class='col-12 col-md-6 '>
              <div className='form-group'>
                <input
                  type='email'
                  class='form-control'
                  placeholder='Your Email'
                  aria-label='Email'
                />
              </div>
            </div>
            <div class='col-12 col-md-6  '>
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
    </div>
  )
}

export default Contact
