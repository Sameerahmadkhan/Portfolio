import React from 'react'

function Contact() {
  return (
    <div>
      <div class="container mt-5">
  <h1 className='text-center headingtext'>FormSubmit Demo</h1>
  <form className='mt-4' action="https://formsubmit.co/samerrkaan9@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
            <label className='ms-1 headingtext'> Name</label>
          <input type="text" name="name" class="form-control" placeholder="Please enter your good name" required/>
        </div>
        <div class="col">
            <label className='ms-1 mt-3 headingtext'>Email</label>
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
        </div>
        {/* <input type="hidden" name="_captcha" value="false"></input> */}

      </div>
    </div>
    <div class="form-group">
        <label className='ms-1 mt-3 headingtext'>Message</label>
      <textarea placeholder="Share your thoughts!" class="form-control" name="message" rows="5" required></textarea>
    </div>
    <div className='d-flex justify-content-center'>
    <button type='submit' className="submitbtn mt-4 headingtext">Submit</button>
    </div>
  </form>
</div>
    </div>
  )
}

export default Contact
