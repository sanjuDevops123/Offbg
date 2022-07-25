import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const ContactUs = () => {
  return (
      <>
      <Header />
      <main id="page-content" class="">

    <section class="header header-backdrop header-backdrop-blue-purple position-relative overflow-hidden">
    <div class="container">
    <div class="d-none d-md-block sprite sprite-circle-bottom" style={{position: 'absolute', top: '50%', left: 0, color: '#DDDFE1', opacity: 0.5}}></div>
 <h1 style={{color: '#000'}} >
 Do you have any questions? We'll respond
  </h1>
</div></section><div class="container mb-5" style={{maxWidth: 700}}>
  <div class="card card-with-shadow">
    <div class="card-body p-0">
      
      <div class="p-sm-3 p-md-5 px-3">
        <p class="text-center" style={{fontWeight: 700}}>
        Kindly fill up this contact form, and we will contact you as soon as possible.
        </p>
        <form novalidate="novalidate" class="hcaptcha-form">
          <div class="form-group">
            <input type="email" name="email" id="email" value="findsuryasv@gmail.com" autocomplete="email" class="form-control" placeholder="Email*" />
          </div>
          <div class="form-group">
            <input type="text" name="subject" id="subject" class="form-control" placeholder="Subject*" />
          </div>
          <div class="form-group">
            <textarea name="message" id="message" class="form-control" rows="5" style={{resize: 'none'}} placeholder="Message*"></textarea>
          </div>
          <div class="form-group">
            <input type="file" name="files[]" id="files_" class="form-control" style={{display: 'none'}} multiple="multiple" />
          </div>
          <div class="text-center">
            <input type="submit" name="commit" value="Send" id="btn-submit" class="btn btn-primary hcaptcha-submit mt-4" />
     
          </div>
</form>      </div>
    </div>
  </div>
</div>

  </main>
      <Footer />
      </>
  )
}

export default ContactUs