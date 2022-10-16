import React from 'react'
import Navigation from '../components/Navigation'
import './Wrapper.css'

const Wrapper = (props) => {
  return (
    <div className='content row d-flex '>
      <nav className='col-sm-2 justify-self-center align-self-center'>
        <Navigation />
      </nav>
      <main className='col-sm-10 d-flex justify-content-center align-content-center'>
        {props.children}
      </main>
    </div>
  )
}

export default Wrapper
