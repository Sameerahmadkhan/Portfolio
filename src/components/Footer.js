import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineMail} from 'react-icons/ai'
import {BsPhoneVibrate} from 'react-icons/bs'

function Footer() {
  return (
      <div className='bg-dark mt-5'>
        <h3 className='text-center text-light pt-4 headingtext'>Contact</h3>
       <Container >
           <Row className='footercontainer'>
        <Col className='text-center'>
        <div>
          <h2 className='text-center mt-5 text-light'><HiOutlineLocationMarker /></h2>
          <h5 className='mt-3 text-light headingtext'>My location is</h5>
          <h5 className='text-center mt-3 text-light paragraphtext'>1233456</h5>
          </div>
        </Col>
        <Col className='text-center'>
        <div>
          <h2 className='text-center mt-5 text-light'><AiOutlineMail /></h2>
          <h5 className='mt-3 text-light headingtext'>My e-mail address is</h5>
          <h5 className='text-center mt-3 text-light paragraphtext'>1233456</h5>
          </div>
        </Col>
        <Col className='text-center'>
        <div>
          <h2 className='text-center mt-5 text-light'><BsPhoneVibrate /></h2>
          <h5 className='mt-3 text-light headingtext'>My contact number is</h5>
          <h5 className='text-center mt-3 text-light paragraphtext'>1233456</h5>
          </div>
        </Col>
      </Row>
      </Container>
     
          </div>
      
  )
}

export default Footer
