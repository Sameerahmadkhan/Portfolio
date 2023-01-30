import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineMail} from 'react-icons/ai'
import {BsPhoneVibrate} from 'react-icons/bs'

function Footer() {
  return (
      <div className='bg-dark'>
        <h2 className='text-center mt-5 text-light'>Contact</h2>
        <h5 className='text-center text-light'>If you want to contact me on mail or phone I mentioned my contact info below Thanks!</h5>
        <div className='divone text-light'>
          <div>
          <h2 className='text-center mt-5 text-light'><HiOutlineLocationMarker /></h2>
          <h5 className='mt-3 text-light'>My location is</h5>
          <h5 className='text-center mt-3 text-light'>1233456</h5>
          </div>
          <div>
          <h2 className='text-center mt-5 text-light'><AiOutlineMail /></h2>
          <h5 className='mt-3 text-light'>My e-mail address is</h5>
          <h5 className='text-center mt-3 text-light'>1233456</h5>
          </div>
          <div>
          <h2 className='text-center mt-5 text-light'><BsPhoneVibrate /></h2>
          <h5 className='mt-3 text-light'>My contact number is</h5>
          <h5 className='text-center mt-3 text-light'>1233456</h5>
          </div>
          </div>
          </div>
      
  )
}

export default Footer
