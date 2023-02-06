import React from 'react'
import './FrontPage.css'
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  const now = 60;
  return (
    <div>
    <div className='halo'>
      <h5 className='mt-5 text-center headingtext'>About Me</h5>
      <h1 className='text-center headingtext'>introduction and Expertise</h1>
      <Container>
      <Row>
        <Col className='div1 text-center'>1 of 2kkkkkkkkkkkk</Col>
        <Col xs={8} className='div2'>
           <h5 className='paragraphtext'> how do you do and whats going onhow do you do and whats
         going onhow do you do and whats going onhow do you do and whats going onhow do you do and whats
          going onhow do you do and whats going onhow do you do and whats
         going onhow do you do and whats going onhow do you do and whats going on
         </h5>
         </Col>   
            </Row>
      
    </Container>

    <Container>
      <Row className='lowergrid'>
        <Col>
          <h1 className='profiletext1 mt-5 headingtext'>Profile</h1>
          <p className='profiletext1 paragraphtext'>I consider myself as a great guy, determinated to acheadingtexteve 
            each goal that I set, and always dedicated to reach the excellence.</p>
            <h4 className='mt-4 headingtext'>Full name</h4>
            <p className='headingtext'>Sameer ahmad khan</p>
            <h4 className='mt-3 headingtext'>Full name</h4>
            <p className='headingtext'>abc def ghyjkl</p>
            <h4 className='mt-3 headingtext'>Full name</h4>
            <p className='headingtext'>abc def ghyjkl</p>
           
        </Col>
        <Col>
        <h1 className='profiletext1 mt-5 headingtext'>Profile</h1>
          <p className='profiletext1 paragraphtext'>I consider myself as a great guy, determinated to acheadingtexteve 
            each goal that I set, and always dedicated to reach the excellence.</p>
            <h4 className='mt-4 headingtext'>Full name</h4>
            <ProgressBar className='progressbar' variant='secondary' now={now} label={`${now}%`}/>
            <h4 className='mt-3 headingtext'>Full name</h4>
            <ProgressBar className='progressbar' variant='secondary' now={now} label={`${now}%`}/>
            <h4 className='mt-3 headingtext'>Full name</h4>
            <ProgressBar className='progressbar' variant='secondary' now={now} label={`${now}%`}/>
            <h4 className='mt-3 headingtext'>Full name</h4>       
            <ProgressBar className='progressbar' variant='secondary' now={now} label={`${now}%`}/>
           
        </Col>
      </Row>
     
    </Container>
     <div className='mt-5 '>
     <Container className='d-flex justify-content-center'>
      <Row className='buttondiv'>
      <Col><button class="button button1  headingtext">DOWNLOAD CV</button></Col>
        <Col> <button class="button button5 headingtext">DOWNLOAD CV</button></Col>
      </Row>

    </Container>
     </div>

     </div>
    </div>
  )
}

export default About
