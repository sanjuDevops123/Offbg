import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
      <>
      
  <div className="home-section mb-0" style={{
    backgroundColor: '#ebdfff'
  }}>
    <div className="dropzone-enabled"></div>
<div className="container">
  <div className="row align-items-center">
    <div className="col-md text-center text-md-right">
      <h2>
      Remove Background from Image
      </h2>
      <p className="lead mt-3">
        <div style={{
          textAlign: 'right'
        }}>
        Make the background of each image <br /> transparent. Upload the file or try one of these.
        </div>
      </p>
    </div>
    <div className="d-none d-lg-block col-lg-1"></div>
    <div className="col-md text-center">
      <div className="card card-with-shadow card-rounded-max card-without-border mx-auto small-uploader-card mb-0 mb-md-4" style={{maxWidth: 270, padding: '15px 25px'}}>
        <div className="card-body">
          <div  onClick={() => navigate('/upload') }>
            <button name="button" type="submit" className="btn btn-primary btn-lg select-photo-file-btn"
            style={{
              background: 'linear-gradient(92.28deg, #2699FB 11.41%, #7726FB 91.35%)',
              bordeRadius: 10,
              padding: '10px 20px',
              fontSize: 15
            }}>
              <i className="fas fa-upload mr-2"></i>
              Upload Image
</button>          </div>
          <div className="mt-2 d-none d-md-block" style={{fontWeight: 700}}>
            or drop a file
          </div>
        </div>
      </div>

      <div className="d-md-none" style={{fontSize: '90%'}}>
        or try one of these
      </div>

      <div style={{fontSize: '60%', opacity: 0.5, maxWidth: 385}} className="mt-3 text-center mx-auto">
        By uploading an image or URL you agree to our <a target="_blank" className="text-dark font-weight-bold" href="/tos">Terms of Service</a>. This site is protected by hCaptcha and its <a target="_blank" rel="noopener" className="text-dark font-weight-bold" href="https://hcaptcha.com/privacy">Privacy Policy</a> and <a target="_blank" rel="noopener" className="text-dark font-weight-bold" href="https://hcaptcha.com/terms">Terms of Service</a> apply.

      </div>
    </div>
  </div>
</div>

  </div>
        <footer className="d-none-mobile-app">
      <div className="upper pb-4 pt-2 py-md-5">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md">
              <div className="d-flex justify-content-between align-items-center py-2" role="button" data-toggle="collapse" data-target="#learn-more-group">
                <h2 className="mb-0 mb-md-3">
                  Learn more
                </h2>
                <i className="fas fa-plus d-block d-md-none"></i>
              </div>
              <div id="learn-more-group" className="collapse footer-collapse ml-4 ml-md-0 my-2 my-md-0">
                <div className="upper-footer-line"><a className="upper-footer-link" style={{cursor: 'pointer'}} onClick={() => navigate('/individuals')}>Individuals</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link" style={{cursor: 'pointer'}} onClick={() => navigate('/photographers')}>Photographers</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link"  style={{cursor: 'pointer'}} onClick={() => navigate('/marketing')}>Marketing</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link"  style={{cursor: 'pointer'}} onClick={() => navigate('/developers')}>Developers</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link" style={{cursor: 'pointer'}} onClick={() => navigate('/ecommerce')}>Ecommerce</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link style={{cursor: 'pointer'}}"onClick={() => navigate('/media')}>Media</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link" style={{cursor: 'pointer'}} onClick={() => navigate('/car-dealership')}>Car Dealerships</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link" style={{cursor: 'pointer'}} onClick={() => navigate('/pricing')}>Pricing</a></div>
              </div>
            </div>
            <div className="col-md">
              <div className="d-flex justify-content-between align-items-center py-2" >
                <h2 className="mb-0 mb-md-3">
                  Tools &amp; API
                </h2>
                <i className="fas fa-plus d-block d-md-none"></i>
              </div>
              {/* <div id="tools-api-group" className="collapse footer-collapse ml-4 ml-md-0 my-2 my-md-0">
                <div className="upper-footer-line"><a className="upper-footer-link">API Documentation</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link" >Android App</a></div>
              </div> */}
            </div>
            <div className="col-md">
              <div className="d-flex justify-content-between align-items-center py-2">
                <h2 className="mb-0 mb-md-3">
                  Support
                </h2>
                <i className="fas fa-plus d-block d-md-none"></i>
              </div>
              <div id="support-group" className="collapse footer-collapse ml-4 ml-md-0 my-2 my-md-0">
                <div className="upper-footer-line"><a className="upper-footer-link" style={{cursor: 'pointer'}} onClick={() => navigate('/faq')}>Help &amp; FAQs</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link" style={{cursor: 'pointer'}} onClick={() => navigate('/contact-us')}>Contact us</a></div>
                <div className="upper-footer-line"><a className="upper-footer-link" style={{cursor: 'pointer'}} onClick={() => navigate('/refunds')}>Refunds</a></div>
              </div>
            </div>
            <div className="col-md">
              <div className="d-flex justify-content-between align-items-center py-2 last" >
                <h2 className="mb-0 mb-md-3">
                  Company
                </h2>
                <i className="fas fa-plus d-block d-md-none"></i>
              </div>
              <div id="company-group" className="collapse footer-collapse ml-4 ml-md-0 my-2 my-md-0">
                <div className="upper-footer-line"><a className="upper-footer-link" href="/blog">Blog</a></div>

              <div className="upper-footer-line"><a className="upper-footer-link" style={{cursor: 'pointer'}}  onClick={() => navigate('/about-us')}>About us</a></div>
              </div>
            </div>
          </div>
          <div className="row row-eq-height align-items-center mt-3 mt-md-5 d-flex justify-content-between">
            <div className="pt-2">
              
            </div>
            <div className="pt-2 d-flex flex-wrap mx-3 mx-md-0">
              <a className="upper-footer-link mr-2" href="/privacy">Privacy Policy</a> |
              <a className="upper-footer-link ml-2" href="/tos">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      <div className="lower py-4 text-center">
        <div className='row'>
          <div className='col-md-6' style={{
            color: '#D6D6D6'
          }}>
          ©Copyright offbg.com | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
      </>
  )
}

export default Footer