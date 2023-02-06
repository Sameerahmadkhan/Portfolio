import React from 'react'
import './FrontPage.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { SiIndeed } from 'react-icons/si'
import { Container } from 'react-bootstrap'
function FrontPage() {
    return (
        <div className=' frontpagemain bg-dark pt-3'>
            <Container>
            <div className=''>
                <h4 className='holatext headingtext text-center text-light'>HOLA WORLD</h4>
                <h1 className='name headingtext text-center text-light mt-2'>I'm SAmeer ahmad khan</h1>
                <div className='frontdiv'>
                <h5 className='headingtext text-center text-light'> Front-end web developer <span className='straightline'> | </span></h5>
                <h5 className='headingtext text-center text-light'>Front-end mobile app developer </h5>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button className="button-89 text-light" role="button">Button 89</button>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                <div className='lowericons mt-4'>
                <FaLinkedinIn className='fs-2 text-light'/>
                <AiFillFacebook className='fs-2 text-light'/>
                <SiIndeed className='fs-2 text-light '/>
                </div>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default FrontPage
