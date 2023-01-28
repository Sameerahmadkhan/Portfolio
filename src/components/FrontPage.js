import React from 'react'
import './FrontPage.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { SiIndeed } from 'react-icons/si'
function FrontPage() {
    return (
        <div className=''>
            <div className='main1'>
                <h4 className=' text-center mt-5'>h o l a W o r l d</h4>
                <h1 className=' text-center mt-3'>I'm Smeer Ahmad Khan</h1>
                <p className=' text-center'>FRONT-END WEB DEVELOPER  |  FRONT-END MOBILE APP DEVELOPER</p>
                <div className='d-flex justify-content-center mt-5'>
                    <button class="button-89" role="button">Button 89</button>
                </div>
                <div className='d-flex justify-content-center'>
                <div className='lowericons mt-5'>
                <FaLinkedinIn className='fs-2'/>
                <AiFillFacebook className='fs-2'/>
                <SiIndeed className='fs-2'/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage
