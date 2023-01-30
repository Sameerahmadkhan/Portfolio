import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './FrontPage.css'
function Resume() {
  return (
    <div>
      <h3 className='text-center mt-5'>Education and experience</h3>
      <div className='uperdiv'>         
      <h6 className='toptext'>I have done my four year of education(Bs) Bachelor of Science in 
        Computer Science and more than 1 year in professional field</h6>
    </div>
    <div>
      <h2 className='text-center'>Education</h2>
    <Container className='educationdiv'>
      <Row className='text-center'>
        <Col className='first'xs={1}>Seco</Col>
        <Col className='first'>Secondary Education</Col>
        <Col className='second text-center' xs={8}>I have done my first year of Secondary education at Peace College Swabi in Pre-engeneering Pre-engeneering.</Col>
      </Row>
      <Row className='text-center mt-5'>
        <Col className='first'xs={1}>Seco</Col>
        <Col className='first'>Secondary Education</Col>
        <Col className='second text-center' xs={8}>I had migrated to Government Higher Secondary Maneri Payan where i did my second year in Pre-engeneering Pre-engeneering.</Col>
      </Row>
      <Row className='text-center mt-5'>
        <Col className='first'xs={1}>Bach</Col>
        <Col className='first'>Secondary Education</Col>
        <Col className='second text-center' xs={8}>I Studied BS Computer Science at university of Swabi,I did my BS with good score <br></br>
          session:2019-2023
        </Col>
      </Row><Row className='text-center mt-5'>
        <Col className='first'xs={1}>Bach</Col>
        <Col className='first'>Certification</Col>
        <Col className='second text-center' xs={8}> I did an online Cources from SimpliLearn and such Organizations and got certificates as well like in JavaScript,Reactjs and upper mentioned technologies. 
        </Col>
      </Row>
    </Container>
    </div>
    <div>
    <Container className='educationdiv mt-5'>
      <h2 className='text-center'>Work Experience</h2>
      <Row className='text-center mt-2'>
        <Col className='first'xs={1}>Work</Col>
        <Col className='first'>BrainsPk</Col>
        <Col className='second text-center' xs={8}>I worked part Time as a junior web and Mobile App Front-end Developer where I worked over a year</Col>
      </Row>
    </Container>

    </div>
    </div>
  )
}

export default Resume
