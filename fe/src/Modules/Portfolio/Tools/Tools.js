import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Tools = () => {
  return (
    <>
      <Header />
      <main id="page-content" style={{
        backgroundColor: '#fff'
      }}>


        <div className="mt-5 mb-4">
          <div className="container pt-5">
            <h1 className="h2 mb-2">Tools and API</h1>
            <p className="lead">Integrate the world's best automatic background removal solution into your daily job to save time, enhance productivity, and supercharge your workflow. Here are some of the best offbg.com integrations.</p>
          </div>
          <div className="py-4">

          </div>
        </div>


        {/* <div className="container">
          <div className="row mb-5">
        <a className="text-decoration-none hover-none  box box-half col-12 col-md-6" >
              <div style={{
              background: '#FFFFFF',
              border: '0.8px solid #F7F7F7',
              boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
              borderRadius: 20,
              padding: '0 18%'
            }} className=" py-4 mb-2 mb-md-0 h-100 d-flex flex-column justify-content-between">
                <span className="font-weight-bold  text-uppercase" style={{fontWeight: 700, color:'#D6D6D6'}}>Featured</span>
                <div className="text-body mt-2">
                 
                  <h3 className="mb-0 font-family-sans-serif">off.bg for Windows</h3>
                  <p style={{
                    color: '#525252',
                    fontWeight: 600,
                    fontSize: 14,
                    margin: 0
                  }} className="mt-2">With our browser app, users can automate the background removal process.</p>
                </div>
                <span className="d-block " style={{
              color: '#2196F3B2',
              fontWeight: 700, 
            }}>Learn more <i className="ml-1 fas fa-chevron-right"></i></span>
              </div>
            </a>
            <a className="text-decoration-none hover-none  box box-half col-12 col-md-6" >
              <div style={{
              background: '#FFFFFF',
              border: '0.8px solid #F7F7F7',
              boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
              borderRadius: 20,
            }} className=" py-4 mb-2 mb-md-0 h-100 d-flex flex-column justify-content-between">
                <span className=" font-weight-bold text-uppercase" style={{fontWeight: 700, color:'#D6D6D6',
                       padding: '0 20%'}}>Featured</span>
                <div className="text-body d-flex">
                  <img src="/img/an1.png" className='mr-3' style={{height: '100%'}} />
                  <div>
                  <h3 className=" mb-0 font-family-sans-serif">Android App</h3>
                  <p style={{
                    color: '#525252',
                    fontWeight: 600,
                    fontSize: 14
                  }}>Wherever you are, you can remove image backgrounds.</p>
                  </div>
                </div>
                <span className="d-block " style={{
              color: '#2196F3B2',
              fontWeight: 700,
              padding: '0 20%'
            }}>Learn more <i className="ml-1 fas fa-chevron-right"></i></span>
              </div>
            </a>
            </div>
        </div> */}


        <div className="container">
          <div className="row mb-4">

          <a style={{
              color: '#2196F3B2',
              fontWeight: 700
            }} className="text-decoration-none hover-none mb-5 box box-third col-12 col-md-4" >
              <div className=" py-4 text-center mb-2 mb-md-0 h-100 d-flex flex-column justify-content-between">
                <div className="text-body">
                  <div className="header-box-image mx-auto" style={{ backgroundImage: "url('/img/t1.png')" }}></div>
                  <h3 className="mt-3 mb-0 font-family-sans-serif">Join our developer community</h3>
                </div>
                <span className="d-block mt-3">Submit your tool <i className="ml-1 fas fa-chevron-right"></i></span>
              </div>
            </a>



            <a style={{
              color: '#2196F3B2',
              fontWeight: 700
            }} className="text-decoration-none hover-none mb-5 box box-third col-12 col-md-4">
              <div className=" py-4 text-center mb-2 mb-md-0 h-100 d-flex flex-column justify-content-between">
                <div className="text-body">
                  <div className="header-box-image mx-auto" style={{ backgroundImage: "url('/img/t2.png')" }}></div>
                  <h3 className="mt-3 mb-0 font-family-sans-serif">Questions? Check out the help articles</h3>
                </div>
                <span className="d-block mt-3">Help Center <i className="ml-1 fas fa-chevron-right"></i></span>
              </div>
            </a>



            <a style={{
              color: '#2196F3B2',
              fontWeight: 700
            }} className="text-decoration-none hover-none mb-5 box box-third col-12 col-md-4" >
              <div className=" py-4 text-center mb-2 mb-md-0 h-100 d-flex flex-column justify-content-between">
                <div className="text-body">
                  <div className="header-box-image mx-auto" style={{ backgroundImage: "url('/img/t3.png')" }}></div>
                  <h3 className="mt-3 mb-0 font-family-sans-serif">Contact our Support Team</h3>
                </div>
                <span className="d-block mt-3">Contact <i className="ml-1 fas fa-chevron-right"></i></span>
              </div>
            </a>


            <a className="text-decoration-none hover-none mb-5 box box-half col-12 col-md-6"  >
              <div className=" py-4 text-center mb-2 mb-md-0 h-100 d-flex flex-column justify-content-between" style={{
              background: '#FFFFFF',
              border: '0.8px solid #F7F7F7',
              boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
              borderRadius: 20
            }}>
                <span className="text-muted text-center font-weight-bold mb-3 text-uppercase">Workflow Automation</span>
                <div className="text-body">
                  <div className="header-box-image mx-auto" style={{backgroundImage: "url('/img/t5.png')"}}></div>
                  <h3 className="mt-3 mb-0 font-family-sans-serif">Connect apps with off.bg</h3>
                 
                </div>
                <span className="d-block mt-3" style={{
              color: '#2196F3B2',
              fontWeight: 700
            }}>Learn more <i className="ml-1 fas fa-chevron-right"></i></span>
              </div>
            </a>



            <a className="text-decoration-none hover-none mb-5 box box-half col-12 col-md-6" >
              <div style={{
              background: '#FFFFFF',
              border: '0.8px solid #F7F7F7',
              boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
              borderRadius: 20
            }} className=" py-4 text-center mb-2 mb-md-0 h-100 d-flex flex-column justify-content-between">
                <span className="text-muted text-center font-weight-bold mb-3 text-uppercase">For developers</span>
                <div className="text-body">
                  <div className="header-box-image mx-auto" style={{ backgroundImage: "url('/img/t6.png')" }}></div>
                  <h3 className="mt-3 mb-0 font-family-sans-serif">Integrate off.bg in any app</h3>
                </div>
                <span className="d-block mt-3" style={{
              color: '#2196F3B2',
              fontWeight: 700
            }}>Learn more <i className="ml-1 fas fa-chevron-right"></i></span>
              </div>
            </a>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default Tools