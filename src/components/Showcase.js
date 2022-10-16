import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Wrapper from '../utilities/Wrapper'
import './Showcase.css'

const Showcase = () => {
  return (
    <Wrapper>
      <div className='row '>
        <div className='col-md-6 section d-flex flex-column hero align-items-center justify-content-center'>
          <h1 className='text-light fs-1'>Dany L'eveque</h1>
          <p className='text-light fs-3 highlight'>Creative Problem Solver</p>
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
            <div className='d-flex align-items-center justify-content-center call-to-action fs-5 '>
              <FontAwesomeIcon icon={faFileAlt} />
              <span>Download CV</span>
            </div>
          </div>
        </div>
        <div className='portait-section col-md-6 d-flex align-items-center justify-content-center '>
          <img
            className='portrait img-fluid '
            src={require('../images/test.jpg')}
            alt='portrait'
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default Showcase
