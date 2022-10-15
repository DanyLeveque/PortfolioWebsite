import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about container row mx-auto'>
      <div className='card col-md-6 mx-auto'>
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

      <div className='card col-md-6 mx-auto'>
        <h2 className='card-title'>Skills</h2>

        <div className='card-body '>
          <div className='row skills '>
            <div className='col '>
              <img src={require('../images/html.png')} alt='html' />
            </div>
            <div className='col '>
              <img src={require('../images/javascript.png')} alt='javascript' />
            </div>
            <div className='col '>
              <img src={require('../images/css.png')} alt='css' />
            </div>
          </div>
          <div className='row skills'>
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
  )
}

export default About
