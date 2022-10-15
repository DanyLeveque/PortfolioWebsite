import React from 'react'
import './Showcase.css'

const Showcase = () => {
  return (
    <div className='d-flex hero row align-items-center justify-content-end mx-auto'>
      <div className='section d-flex flex-column col-md-5 align-items-center justify-content-center'>
        <h1 className='display-1 text-light'>Dany L'eveque</h1>
        <p className='text-light fs-2 highlight'>Creative Problem Solver</p>
        <div className='brief'>
          <p>
            I offer web design solutions to help you achieve your dreams and
            pave the way to outstanding results with the goal to delight your
            customers.
          </p>
          <hr />
          <p>
            My expertise span the full spectrum of developing a visually
            appealing user experience supported by technically sophisticated
            backend logic to solve real-world problems
          </p>
        </div>
      </div>
      <div className='portrait-section d-flex  col-md-5 align-items-center justify-content-end'>
        <img
          className='portrait img-fluid'
          src={require('../images/test.jpg')}
          alt='portrait'
        />
      </div>
    </div>
  )
}

export default Showcase
