import React from 'react'
import './About.css'
import Wrapper from '../utilities/Wrapper'

const About = () => {
  return (
    <Wrapper>
      <div className='info row align-items-center justify-content-space-between mx-auto'>
        <div className='card col-sm-6 '>
          <h2 className='card-title'>Personal Info</h2>

          <div className='card-body mx-auto d-flex flex-column justify-content-center'>
            <p className='card-text'>
              <strong>Full Names:</strong>Jean Charles Dany L'eveque
            </p>
            <p className='card-text'>
              <strong> Occupation:</strong>Freelance Web Designer
            </p>
            <p className='card-text'>
              <strong> Nationality:</strong> Mauritian
            </p>
            <p className='card-text'>
              <strong> Age:</strong> 40
            </p>
            <p className='card-text'>
              <strong> Email:</strong> danlev1608@gmail.com
            </p>
            <p className='card-text'>
              <strong> Mobile Number:</strong> +230 54913436
            </p>
          </div>
        </div>

        <div className='card col-sm-6 '>
          <h2 className='card-title'>Skills</h2>

          <div className='card-body d-flex flex-column justify-content-center'>
            <div className='row skills '>
              <div className='col '>
                <img src={require('../images/html.png')} alt='html' />
              </div>
              <div className='col '>
                <img
                  src={require('../images/javascript.png')}
                  alt='javascript'
                />
              </div>
              <div className='col '>
                <img src={require('../images/css.png')} alt='css' />
              </div>
            </div>
            <div className='row skills mt-5'>
              <div className='col '>
                <img src={require('../images/react.png')} alt='react' />
              </div>
              <div className='col '>
                <img src={require('../images/nodejs.png')} alt='node' />
              </div>
              <div className='col'>
                <img src={require('../images/mongodb.png')} alt='mongodb' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default About
