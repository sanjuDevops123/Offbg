import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'

const Marketing = () => {
    return (
        <>
            <Header />
            <main id="page-content" className="">

                <section className="header header-backdrop header-backdrop-purple position-relative overflow-hidden tlp-header mb-md-0 pb-md-5"
                    style={{
                        background: 'url(/img/htu.png)',
                        backgroundPosition: 'center'
                    }}>
                    <div className="container">
                        <div className=" row-eq-height d-flex justify-content-center">

                            <div className="d-flex justify-content-center text-md-left">
                                <h1 className='text-center'>
                                    <div className="pre-headline">
                                    Change the background and color of an Add
                                    </div>
                                    Advertising Photo Editing with offbg
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="tlp-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 order-md-last">
                                <div className="cocoen">
                                    <img className="img-fluid" src="img/m1.png" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="mt-4 mt-md-0">
                                Remove Backgrounds automatically
                                </h2>
                                <div className="lead">
                                    <p> It is a time-consuming task when committed by graphic designers. We make your job done quickly. <br />
                                    Anyone can use offbg.com to extract subjects and execute their ad photo editing in seconds with just one click.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tlp-section">
                    <div className="container text-md-center">
                        <div className="d-flex flex-column">
                            <div>
                                <img className="img-fluid center-block" src="" />
                            </div>
                            <h2 className="mt-4 mt-md-0 mb-md-2 order-md-first">
                            Increase customer engagement with the brand
                            </h2>
                            <div style={{ maxWidth: 600 }} className="mx-auto mt-md-2">
                                <div className="lead">
                                    <p style={{ textAlign: 'center' }}>Audiences can use offbg.com to create and share well-designed, eye-catching images. <br /> <br />
                                    For engaging and effective marketing, create a simple and enjoyable experience.
                                       </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tlp-section ">


                    <div className="container" style={{ zIndex: 3 }}>
                        <div className="row align-items-center">
                            <div className="col-md-6 ">
                                <img className="img-fluid" style={{ zIndex: 10 }} src="/img/m2.png" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="mt-4 mt-md-0">
                                Professional level of quality
                                </h2>
                                <div className="lead">
                                    <p>Whether you're using selfies, product images, or professional portraits, offbg makes it easy to handle hard edges such as hair.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="tlp-section position-relative">

                    <div className="container" style={{ zIndex: 3 }}>
                        <div className="row align-items-center">
                            <div className="col-md-6 ">
                                <h2 className="mt-4 mt-md-0">
                                Accelerate your workflow
                                </h2>
                                <div className="lead">
                                    <p>Instead, let your imagination run wild! It's now as simple as dragging and dropping to remove backgrounds.

                                        <br />  <br />
                                        Offbg AI and fantastic fine-tuning tools are fully integrated with Photoshop, so use them to speed up your workflow.
                                       
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 position-relative ">
                                <img className="img-fluid position-relative" style={{ zIndex: 10 }} src="/img/m3.gif" />

                            </div>

                        </div>
                    </div>
                </section>



            </main>
            <Footer />
        </>
    )
}

export default Marketing