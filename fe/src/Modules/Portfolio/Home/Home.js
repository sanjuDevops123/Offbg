import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Home = () => {

  const navigate = useNavigate()
  return (
      <>
      <Header />
      <div className="navbar-backdrop" style={{display: 'none'}}></div>
<main id="page-content" className="">

    

  <div className="dropzone-enabled"></div>

  <section className="home-section home-section-first position-relative">
    <div className="d-none d-md-block sprite sprite-square" style={{position: 'absolute', bottom: '45%', right: 0, color: '#D7EFF3'}}></div>
    <div className="sprite sprite-circle-bottom" style={{position: 'absolute', top: '40%', left: -36, color: '#D9E6F2'}}></div>
    <div className="sprite sprite-triangle-rect" style={{position: 'absolute', right: 0, bottom: 0, color: '#D2C2D0'}}></div>
    <div className="container">
      <div className="row">
        <div className="col-md text-center text-md-left">
          <h1>
          Single and Bulk Image Uploads
          </h1>
          <p className="lead">
          100% Free and Automatic
          </p>

          <div className="mt-5 mb-3 mb-lg-5">
            <div className="home-start-sample position-relative mx-auto">
              <div className="position-relative" data-controller="animation-demo">
                <div className="position-absolute animation-demo-image animation-demo-image-hidden" style={{zIndex: 15, overflow: 'hidden'}} data-target="animation-demo.transparent">
                  <img className="img-fluid position-relative" style={{zIndex: 12}} src="/img/home1.png" />
                  <div className="animation-demo-image transparency-grid position-absolute" style={{left: 0, top: 0, right: 0, bottom: 0, zIndex: 11}} data-target="animation-demo.grid"></div>
                </div>

                <div className="position-relative animation-demo-image" data-target="animation-demo.original" style={{zIndex: 10}}>
                  <img className="img-fluid"src="/img/home1.png" />
                </div>
              </div>

              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="192" height="146" viewBox="0 0 192 146" className="sprite-mobile-small sprite sprite-dots" style={{position: 'absolute', left: -105, bottom: 50, color: '#C0D6EA'}}><circle r="1.5" fill="currentColor" cx="2" cy="2"></circle><circle r="1.5" fill="currentColor" cx="2" cy="25"></circle><circle r="1.5" fill="currentColor" cx="2" cy="48"></circle><circle r="1.5" fill="currentColor" cx="2" cy="71"></circle><circle r="1.5" fill="currentColor" cx="2" cy="94"></circle><circle r="1.5" fill="currentColor" cx="2" cy="117"></circle><circle r="1.5" fill="currentColor" cx="2" cy="140"></circle><circle r="1.5" fill="currentColor" cx="25" cy="2"></circle><circle r="1.5" fill="currentColor" cx="25" cy="25"></circle><circle r="1.5" fill="currentColor" cx="25" cy="48"></circle><circle r="1.5" fill="currentColor" cx="25" cy="71"></circle><circle r="1.5" fill="currentColor" cx="25" cy="94"></circle><circle r="1.5" fill="currentColor" cx="25" cy="117"></circle><circle r="1.5" fill="currentColor" cx="25" cy="140"></circle><circle r="1.5" fill="currentColor" cx="48" cy="2"></circle><circle r="1.5" fill="currentColor" cx="48" cy="25"></circle><circle r="1.5" fill="currentColor" cx="48" cy="48"></circle><circle r="1.5" fill="currentColor" cx="48" cy="71"></circle><circle r="1.5" fill="currentColor" cx="48" cy="94"></circle><circle r="1.5" fill="currentColor" cx="48" cy="117"></circle><circle r="1.5" fill="currentColor" cx="48" cy="140"></circle><circle r="1.5" fill="currentColor" cx="71" cy="2"></circle><circle r="1.5" fill="currentColor" cx="71" cy="25"></circle><circle r="1.5" fill="currentColor" cx="71" cy="48"></circle><circle r="1.5" fill="currentColor" cx="71" cy="71"></circle><circle r="1.5" fill="currentColor" cx="71" cy="94"></circle><circle r="1.5" fill="currentColor" cx="71" cy="117"></circle><circle r="1.5" fill="currentColor" cx="71" cy="140"></circle><circle r="1.5" fill="currentColor" cx="94" cy="2"></circle><circle r="1.5" fill="currentColor" cx="94" cy="25"></circle><circle r="1.5" fill="currentColor" cx="94" cy="48"></circle><circle r="1.5" fill="currentColor" cx="94" cy="71"></circle><circle r="1.5" fill="currentColor" cx="94" cy="94"></circle><circle r="1.5" fill="currentColor" cx="94" cy="117"></circle><circle r="1.5" fill="currentColor" cx="94" cy="140"></circle><circle r="1.5" fill="currentColor" cx="117" cy="2"></circle><circle r="1.5" fill="currentColor" cx="117" cy="25"></circle><circle r="1.5" fill="currentColor" cx="117" cy="48"></circle><circle r="1.5" fill="currentColor" cx="117" cy="71"></circle><circle r="1.5" fill="currentColor" cx="117" cy="94"></circle><circle r="1.5" fill="currentColor" cx="117" cy="117"></circle><circle r="1.5" fill="currentColor" cx="117" cy="140"></circle><circle r="1.5" fill="currentColor" cx="140" cy="2"></circle><circle r="1.5" fill="currentColor" cx="140" cy="25"></circle><circle r="1.5" fill="currentColor" cx="140" cy="48"></circle><circle r="1.5" fill="currentColor" cx="140" cy="71"></circle><circle r="1.5" fill="currentColor" cx="140" cy="94"></circle><circle r="1.5" fill="currentColor" cx="140" cy="117"></circle><circle r="1.5" fill="currentColor" cx="140" cy="140"></circle><circle r="1.5" fill="currentColor" cx="163" cy="2"></circle><circle r="1.5" fill="currentColor" cx="163" cy="25"></circle><circle r="1.5" fill="currentColor" cx="163" cy="48"></circle><circle r="1.5" fill="currentColor" cx="163" cy="71"></circle><circle r="1.5" fill="currentColor" cx="163" cy="94"></circle><circle r="1.5" fill="currentColor" cx="163" cy="117"></circle><circle r="1.5" fill="currentColor" cx="163" cy="140"></circle><circle r="1.5" fill="currentColor" cx="186" cy="2"></circle><circle r="1.5" fill="currentColor" cx="186" cy="25"></circle><circle r="1.5" fill="currentColor" cx="186" cy="48"></circle><circle r="1.5" fill="currentColor" cx="186" cy="71"></circle><circle r="1.5" fill="currentColor" cx="186" cy="94"></circle><circle r="1.5" fill="currentColor" cx="186" cy="117"></circle><circle r="1.5" fill="currentColor" cx="186" cy="140"></circle><circle r="1.5" fill="currentColor" cx="209" cy="2"></circle><circle r="1.5" fill="currentColor" cx="209" cy="25"></circle><circle r="1.5" fill="currentColor" cx="209" cy="48"></circle><circle r="1.5" fill="currentColor" cx="209" cy="71"></circle><circle r="1.5" fill="currentColor" cx="209" cy="94"></circle><circle r="1.5" fill="currentColor" cx="209" cy="117"></circle><circle r="1.5" fill="currentColor" cx="209" cy="140"></circle></svg>
              <div className="sprite-mobile-small sprite sprite-triangle-equi" style={{position: 'absolute', left: -40, bottom: -30, color: '#EBE8F3'}}></div>
              <div className="sprite-mobile-small sprite sprite-circle" style={{position: 'absolute', right: -30, top: -30, color: '#FFF9EE'}}></div>
            </div>
          </div>
        </div>
        <div className="col-md-1 home-spacer-column"></div>
        <div className="col-md d-flex flex-column">
          <div className="pl-md-1 mt-auto position-relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="88.209" height="98.922" viewBox="0 0 88.209 98.922" className="home-start-upload-arrow sprite sprite-arrow"><path d="M79.79,93.774l-2.981,1.17-1.641.6-3.195,1.112c-4.176,1.41-8,2.525-11.282,3.3-6.561,1.548-10.941,1.733-11.585.189s2.569-4.527,8.285-8.1c2.425-1.516,5.322-3.141,8.544-4.8A57.408,57.408,0,0,1,48.179,81.8,60.135,60.135,0,0,1,38.5,75.7,58.62,58.62,0,0,1,29.7,67.015,61.125,61.125,0,0,1,18.809,46.249a68.736,68.736,0,0,1-3.02-18.388A53.086,53.086,0,0,1,15.95,20.8c.086-1.034.147-1.993.287-2.873s.3-1.682.466-2.4c.65-2.878,1.407-4.432,2.244-4.431s1.676,1.547,2.473,4.275c.2.682.4,1.438.589,2.264l.7,2.662c.488,1.9.9,4.068,1.571,6.4a110.967,110.967,0,0,0,5.058,15.825,66.468,66.468,0,0,0,9.768,16.843,60.866,60.866,0,0,0,6.913,7.144,67.012,67.012,0,0,0,7.545,5.506,78,78,0,0,0,14.7,6.927c.152.054.3.1.446.155-2.663-3.208-4.966-6.216-6.789-8.867-3.819-5.554-5.579-9.57-4.372-10.73s5.15.754,10.551,4.788c2.7,2.017,5.765,4.563,9.034,7.52L79.622,74.1l1.268,1.2,2.267,2.26c3.354,3.371,6.86,6.955,10.378,10.614C88.855,90.127,84.209,92.018,79.79,93.774Z" transform="translate(-16.963 0.383) rotate(-7)" fill="currentColor"></path></svg>
            <div className="home-upload-widget-wrapper">

            <div className="card card-with-shadow card-rounded-max card-without-border  small-uploader-card mb-0" style={{maxWidth: 350, padding: '40px 35px'}}>
        <div className="card-body d-flex justify-content-center flex-column">
          <div onClick={() => navigate('/upload') } className=" d-flex justify-content-center">
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
          <div className="mt-2 d-none d-md-block text-center" style={{fontWeight: 700}}>
            or drop a file
          </div>
        </div>
      </div>

            </div>
          </div>

          <div style={{fontSize: '60%', opacity: 0.5, maxWidth: 385}} className="mt-3 text-center">
            By uploading an image or URL you agree to our <a target="_blank" className="text-dark font-weight-bold" href="/tos">Terms of Service</a>. This site is protected by hCaptcha and its <a target="_blank" rel="noopener" className="text-dark font-weight-bold" href="https://hcaptcha.com/privacy">Privacy Policy</a> and <a target="_blank" rel="noopener" className="text-dark font-weight-bold" href="https://hcaptcha.com/terms">Terms of Service</a> apply.

          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="home-section">
    <div className="container">
      <h2 className="text-center">
      Edit images seamlessly!
      </h2>

      <div className="tab-content text-center my-2">
          <div className="tab-pane active" id="ideas-people" role="tabpanel" aria-labelledby="ideas-people-tab">
            <div className="inspiration-panels-wrapper">
              <div className="inspiration-panels">
                <div className="inspiration-panel panel1">
                  <img className="img-fluid" src="/img/home2.png" />
             
                  <svg xmlns="http://www.w3.org/2000/svg"
                  style={{
                  
                    bottom: '-58px',
    right: '-116px',
    top: '29px',
    left: '250px'
                  }}  width="88.209" height="98.922" viewBox="0 0 88.209 98.922" className="sprite sprite-arrow"><path d="M79.79,93.774l-2.981,1.17-1.641.6-3.195,1.112c-4.176,1.41-8,2.525-11.282,3.3-6.561,1.548-10.941,1.733-11.585.189s2.569-4.527,8.285-8.1c2.425-1.516,5.322-3.141,8.544-4.8A57.408,57.408,0,0,1,48.179,81.8,60.135,60.135,0,0,1,38.5,75.7,58.62,58.62,0,0,1,29.7,67.015,61.125,61.125,0,0,1,18.809,46.249a68.736,68.736,0,0,1-3.02-18.388A53.086,53.086,0,0,1,15.95,20.8c.086-1.034.147-1.993.287-2.873s.3-1.682.466-2.4c.65-2.878,1.407-4.432,2.244-4.431s1.676,1.547,2.473,4.275c.2.682.4,1.438.589,2.264l.7,2.662c.488,1.9.9,4.068,1.571,6.4a110.967,110.967,0,0,0,5.058,15.825,66.468,66.468,0,0,0,9.768,16.843,60.866,60.866,0,0,0,6.913,7.144,67.012,67.012,0,0,0,7.545,5.506,78,78,0,0,0,14.7,6.927c.152.054.3.1.446.155-2.663-3.208-4.966-6.216-6.789-8.867-3.819-5.554-5.579-9.57-4.372-10.73s5.15.754,10.551,4.788c2.7,2.017,5.765,4.563,9.034,7.52L79.622,74.1l1.268,1.2,2.267,2.26c3.354,3.371,6.86,6.955,10.378,10.614C88.855,90.127,84.209,92.018,79.79,93.774Z" transform="translate(-16.963 0.383) rotate(-7)" fill="currentColor"></path></svg>
           
                </div>
                <div className="inspiration-panel panel3">
                  <img className="img-fluid" src="/img/home3.png" />
                  <svg xmlns="http://www.w3.org/2000/svg"
                  style={{
                  
                    bottom: '-58px',
    right: '-116px',
    top: '29px'
                  }}  width="88.209" height="98.922" viewBox="0 0 88.209 98.922" className="sprite sprite-arrow"><path d="M79.79,93.774l-2.981,1.17-1.641.6-3.195,1.112c-4.176,1.41-8,2.525-11.282,3.3-6.561,1.548-10.941,1.733-11.585.189s2.569-4.527,8.285-8.1c2.425-1.516,5.322-3.141,8.544-4.8A57.408,57.408,0,0,1,48.179,81.8,60.135,60.135,0,0,1,38.5,75.7,58.62,58.62,0,0,1,29.7,67.015,61.125,61.125,0,0,1,18.809,46.249a68.736,68.736,0,0,1-3.02-18.388A53.086,53.086,0,0,1,15.95,20.8c.086-1.034.147-1.993.287-2.873s.3-1.682.466-2.4c.65-2.878,1.407-4.432,2.244-4.431s1.676,1.547,2.473,4.275c.2.682.4,1.438.589,2.264l.7,2.662c.488,1.9.9,4.068,1.571,6.4a110.967,110.967,0,0,0,5.058,15.825,66.468,66.468,0,0,0,9.768,16.843,60.866,60.866,0,0,0,6.913,7.144,67.012,67.012,0,0,0,7.545,5.506,78,78,0,0,0,14.7,6.927c.152.054.3.1.446.155-2.663-3.208-4.966-6.216-6.789-8.867-3.819-5.554-5.579-9.57-4.372-10.73s5.15.754,10.551,4.788c2.7,2.017,5.765,4.563,9.034,7.52L79.622,74.1l1.268,1.2,2.267,2.26c3.354,3.371,6.86,6.955,10.378,10.614C88.855,90.127,84.209,92.018,79.79,93.774Z" transform="translate(-16.963 0.383) rotate(-7)" fill="currentColor"></path></svg>
           
                </div>
                
                <div className="inspiration-panel panel5">
                  <img className="img-fluid" src="/img/home4.png" />
                  
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>

  <section className="home-section">
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="row">
            <div className="col-2 d-lg-none"></div>
            <div className="col-8 col-lg-12">
              <img className="img-fluid mb-4 mb-md-0 mx-auto d-block" src="/img/home5.png" />
            </div>
          </div>
        </div>
        <div className="col-md">
          <h2>
          With one click, Remove the Background in 5 seconds
          </h2>
          <div className="lead">
            <p>You can cut down on editing time and have more fun with offbg.com's intelligent AI. offbg.com  can accomplish everything from making a background translucent (PNG) to adding a white background to a photo.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="home-section">
    <div className="container" data-controller="before-after-tabs">
      <h2 className="text-center">
        Stunning Quality
      </h2>


      <div className="position-relative mx-auto mt-4" style={{maxWidth: 800}}>
       
        <div className="tab-content text-center my-2 position-relative mx-auto" style={{zIndex: 10}}>
            <div className="tab-pane active" id="quality-0" role="tabpanel" aria-labelledby="quality-0-tab">
              <div className="cocoen cocoen-lazy">
                <img className="img-fluid" src="/img/home6.png" />
              
              </div>
            </div>
       
        </div>
      </div>

    </div>
  </div>


  <div className="home-section">
    <div className="container text-md-center">
      <h2>
      Increase your Productivity and Creativity!
      </h2>

      <div className="lead mx-auto mb-4" style={{maxWidth: 800}}>
        <p>Whether you want to design a mind-blowing greetings card for your best friend or quickly sort through thousands of pet Photographs, offbg.com can help.
</p>
      </div>

       <div className="text-left">
  <div className="row">
    <div className="col-md-6 col-xl py-md-2">
      <a className="btn btn-arrow text-left" onClick={() => navigate('/individuals')}>for Individuals</a>
    </div>
    <div className="col-md-6 col-xl py-md-2">
      <a className="btn btn-arrow text-left" onClick={() => navigate('/photographers')}>for Photographers</a>
    </div>
    <div className="col-md-6 col-xl py-md-2">
      <a className="btn btn-arrow text-left" onClick={() => navigate('/ecommerce')}>for Ecommerce</a>
    </div>
    <div className="col-md-6 col-xl py-md-2">
      <a className="btn btn-arrow text-left" onClick={() => navigate('/media')}>for Media</a>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-xl py-md-2">
      <a className="btn btn-arrow text-left" onClick={() => navigate('/marketing')}>for Marketing</a>
    </div>
    <div className="col-md-6 col-xl py-md-2">
      <a className="btn btn-arrow text-left" onClick={() => navigate('/car-dealership')}>for Car Dealerships</a>
    </div>
    <div className="col-md-6 col-xl py-md-2">
      <a className="btn btn-arrow text-left" onClick={() => navigate('/developers')}>for Developers</a>
    </div>
    <div className="col-md-6 col-xl py-md-2">
      <a className="btn btn-arrow text-left" onClick={() => navigate('/developers')}>for Enterprise</a>
    </div>

  </div>
</div>

    </div>
  </div>


  </main>
<Footer />
      </>
  )
}

export default Home