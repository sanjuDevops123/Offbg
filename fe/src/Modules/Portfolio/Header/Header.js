import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [showUseCases, setToShowUseCases] = useState(false);
    const history = useNavigate();
    
  return (
   <>
     <nav className="navbar navbar-expand-lg navbar-light fixed-top d-none-mobile-app">
    <a className="navbar-brand pt-0 pb-0" href="/">
      <img id="navbar-logo" alt="off.bg" src="/img/logo.png" style={{
        padding: '0 20px'
      }} />
</a>    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-center">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown" data-target="navbar.dropdownParent">
          <a className="nav-link" onClick={() => setToShowUseCases(!showUseCases)}>
            How to use
            <i className="fas fa-caret-down d-lg-none"></i>
          </a>
          {
              showUseCases && (
          <div className="dropdown-menu d-block">
            <div className="container">
              <div className="row w-100">
                <div className="col-12 col-sm-6 col-lg-3 py-1 py-lg-3">
                  <a className="dropdown-item" onClick={() => history('/individuals')}>
                    <div className="d-inline-block d-sm-block" style={{verticalAlign: 'middle'}}><i className="fal fa-user fa-2x text-primary fa-fw"></i></div>
                    <div className="d-inline-block d-sm-block mt-lg-1 text-wrap">for Individuals</div>
</a>                </div>
                <div className="col-12 col-sm-6 col-lg-3 py-1 py-lg-3">
                  <a className="dropdown-item" onClick={() => history('/photographers')}>
                    <div className="d-inline-block d-sm-block" style={{verticalAlign: 'middle'}}><i className="fal fa-camera fa-2x text-primary fa-fw"></i></div>
                    <div className="d-inline-block d-sm-block mt-lg-1 text-wrap">for Photographers</div>
</a>                </div>
                <div className="col-12 col-sm-6 col-lg-3 py-1 py-lg-3">
                  <a className="dropdown-item"onClick={() => history('/marketing')}>
                    <div className="d-inline-block d-sm-block" style={{verticalAlign: 'middle'}}><i className="fal fa-bullhorn fa-2x text-primary fa-fw"></i></div>
                    <div className="d-inline-block d-sm-block mt-lg-1 text-wrap">for Marketing</div>
</a>                </div>
                <div className="col-12 col-sm-6 col-lg-3 py-1 py-lg-3">
                  <a className="dropdown-item" onClick={() => history('/developers')}>
                    <div className="d-inline-block d-sm-block" style={{verticalAlign: 'middle'}}><i className="fal fa-code fa-2x text-primary fa-fw"></i></div>
                    <div className="d-inline-block d-sm-block mt-lg-1 text-wrap">for Developers</div>
</a>                </div>
              </div>
              <div className="row w-100">
                <div className="col-12 col-sm-6 col-lg-3 py-1 py-lg-3">
                  <a className="dropdown-item" onClick={() => history('/ecommerce')}>
                    <div className="d-inline-block d-sm-block" style={{verticalAlign: 'middle'}}><i className="fal fa-shopping-cart fa-2x text-primary fa-fw"></i></div>
                    <div className="d-inline-block d-sm-block mt-lg-1 text-wrap">for Ecommerce</div>
</a>                </div>
                <div className="col-12 col-sm-6 col-lg-3 py-1 py-lg-3">
                  <a className="dropdown-item" onClick={() => history('/media')}>
                    <div className="d-inline-block d-sm-block" style={{verticalAlign: 'middle'}}><i className="fal fa-laptop fa-2x text-primary fa-fw"></i></div>
                    <div className="d-inline-block d-sm-block mt-lg-1 text-wrap">for Media</div>
</a>                </div>
                <div className="col-12 col-sm-6 col-lg-3 py-1 py-lg-3">
                  <a className="dropdown-item" onClick={() => history('/car-dealership')}>
                    <div className="d-inline-block d-sm-block" style={{verticalAlign: 'middle'}}><i className="fal fa-car fa-2x text-primary fa-fw"></i></div>
                    <div className="d-inline-block d-sm-block mt-lg-1 text-wrap">for Car Dealerships</div>
</a>                </div>
                {/* <div className="col-12 col-sm-6 col-lg-3 py-1 py-lg-3">
                  <a className="dropdown-item ga-tracked" >
                    <div className="d-inline-block d-sm-block" style={{verticalAlign: 'middle'}}><i className="fal fa-building fa-2x text-primary fa-fw"></i></div>
                    <div className="d-inline-block d-sm-block mt-lg-1 text-wrap">for Enterprise</div>
</a>                </div> */}
              </div>
            </div>
          </div>

              )
          }
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => history('/tools')}>Tools &amp; API</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  onClick={() => history('/pricing')}>
            Pricing
</a>        </li>
      </ul>
      <div>
        <div className="navbar-btn-wrapper">
          <a className="btn btn-outline-primary mx-2 mb-2 mb-lg-0" onClick={() => history('/upload')}>Remove Background</a>
        </div>
        <div className="navbar-btn-wrapper" id="navbar-user-options">
          
    <a id="sso-sign-in-btn" className="btn btn-outline-secondary sso-sign-in-btn" onClick={() => history('/auth/login')}>Login / Sign up</a>

        </div>
      </div>
    </div>
  </nav>
  {
      showUseCases && (
          <div className='navbar-backdrop' onClick={() => setToShowUseCases(!showUseCases)}></div>
      )
  }
  </>
  )
}

export default Header