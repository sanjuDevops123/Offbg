import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Pricing = () => {
  return (
    <>
      <Header />
      <main id="page-content" className="">


        <section className="header header-backdrop header-backdrop-blue-green position-relative overflow-hidden"><div className="container">
          <div className="d-none d-md-block sprite sprite-circle-bottom" style={{ position: 'absolute', top: '50%', left: 0, color: '#E7F5F8', opacity: 0.5 }}></div>
          <h1>
            Get a High-Resolution Images
          </h1>
          <p className="lead">
            <span style={{ textTransform: 'uppercase' }} className="font-weight-bold">
              1 Image = 1 Credit
            </span>
            <span className="hover-tooltip" style={{ marginLeft: 5, opacity: 0.8 }} data-tippy-content="<p><b>Preview Images</b> up to 0.25 megapixels (e.g. 625x400) are always FREE on the www.offbg website.<br />1/4 credit will be charged via apps and API.</p><p><b>Full Images</b> up to 25 megapixels  (e.g. 6250×4000) will be charged 1 credit.</p>">
              or less
              <i className="fas fa-info-circle" style={{ fontSize: '75%' }}></i>
            </span>  </p>
        </div></section>

        <section className="position-relative pricing-mobile-up" style={{ zIndex: 10 }}>
          <div className="container">
            <div className="pricing-overview signed-out">
              <div className="row pricing-row">
                <div className="pricing-column pricing-left text-center">
                  <div className="upper">
                    <h2 className="mb-3" style={{ fontSize: '2rem', fontWeight: 400 }}>
                      Free Account
                    </h2>

                    <div style={{ fontSize: '90%', marginTop: 27 }}>
                      <div style={{ marginBottom: 18 }}>
                        <div><i className="fal fa-image fa-2x" style={{ color: '#54616C' }}></i></div>
                        <div><strong>1 free credit</strong></div>
                      </div>

                      <div style={{ marginBottom: 18 }}>
                        <div><i className="fal fa-code fa-2x" style={{ color: '#54616C' }}></i></div>
                        <div><strong>50 free previews</strong></div>
                        <div style={{ fontSize: '90%' }}>
                          via API and apps per month
                        </div>
                      </div>

                      <div style={{ marginBottom: 18 }}>
                        <div><i className="fal fa-box-open fa-2x" style={{ color: '#54616C' }}></i></div>
                        <div>
                          <p>Apps for Windows / Mac / Linux
                            <br />and Adobe Photoshop
                          </p>
                        </div>
                      </div>

                      <div style={{ marginBottom: 18 }}>
                        <div><i className="fal fa-bullhorn fa-2x" style={{ color: '#54616C' }}></i></div>
                        <div>Refer friends and earn credits</div>
                      </div>
                    </div>

                    <div>
                      <a className="btn btn-outline-primary" style={{ minWidth: 170 }} href="https://accounts.Offbg.ai/oauth/authorize?client_id=Wr--JQP_UWyenrH54zWrGh9OFuYRnRCYntYqsGNeQBM&amp;form=signup&amp;locale=en&amp;redirect_uri=https%3A%2F%2Fwww.offbg%2Fauth%3Fpassback%255Bredirect_to%255D%3D%252Fpricing%26passback%255Bstate%255D%3D42ba0fccbed74a25754c7093abee5e8e13536ea428c2389be736bcfae18fbbfd93da79c71e13e3d3f93bb8e8def246abe82e050f277719d4dcde4877b5390d54&amp;response_type=code">
                        Sign up free
                      </a>            </div>
                  </div>
                  <div className="lower">
                    <strong>Free Forever:</strong><br />
                    Recommended for personal use and evaluation
                  </div>
                </div>
                <div className="pricing-column pricing-center ribbon" data-ribbon="Best Value">
                  <div className="upper">
                    <h2 className="mb-3" style={{ fontSize: '2rem', fontWeight: 400 }}>
                      Subscription Plan
                    </h2>

                    <div data-controller="select-plan" data-select-plan-interval="monthly" className="select-plan-overview">
                      <div style={{ textAlign: 'center', color: '#2699FB', lineHeight: 1, marginBottom: 15 }}>
                        <span className="h3" style={{ fontSize: 40, fontWeight: 400, display: 'inline-block', verticalAlign: 'middle' }}></span>
                        <span style={{ fontSize: 12, display: 'inline-block', verticalAlign: 'middle', marginLeft: 5, marginTop: 10 }}>/ image</span>
                      </div>

                      <table style={{ margin: '0 auto 20px auto' }} className="plans-table">
                        <tbody>
                          <tr className="selectable plan-row  " >
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                40 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>
                              <div className="text text-primary visible-when-selected" style={{ fontSize: '80%' }}>
                                <span className="d-sm-none">Non-commercial</span>
                                <span className="d-none d-sm-inline">For non-commercial use only</span>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 599
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 539.10
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 14.98
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 13.48
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row active ">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                200 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 2,650
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 2,385
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 13.25
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 11.93
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  " >
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                500 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 5,950
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 5,355
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 11.90
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 10.71
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  " >
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                1,200 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 12,900
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 11,610
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 10.75
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 9.68
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  " data-action="click-&gt;select-plan#select" data-monthly-button="buy" data-yearly-button="buy" data-monthly-paddle-id="562651" data-monthly-paddle-coupon="" data-yearly-paddle-id="564382" data-yearly-paddle-coupon="" data-paddle-type="plan" data-monthly-plan-preview-url="/switch_plan/2739797c-781c-4c51-afc7-d495a84a3e07" data-yearly-plan-preview-url="/switch_plan/94d5ef97-f6f2-49d5-b238-72fdd75fabf2" data-monthly-summary="₹ 26,900 per month" data-yearly-summary="₹ 24,210 per month, billed annually">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                2,800 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 26,900
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 24,210
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 9.61
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 8.65
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  additional-hidden" data-action="click-&gt;select-plan#select" data-monthly-button="buy" data-yearly-button="buy" data-monthly-paddle-id="562652" data-monthly-paddle-coupon="" data-yearly-paddle-id="564383" data-yearly-paddle-coupon="" data-paddle-type="plan" data-monthly-plan-preview-url="/switch_plan/1470b464-a797-4e18-9bb4-296928763fda" data-yearly-plan-preview-url="/switch_plan/1e54b1bb-dccd-49cf-9bae-5ed2c0bf6ca5" data-monthly-summary="₹ 39,900 per month" data-yearly-summary="₹ 35,910 per month, billed annually">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                5,000 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 39,900
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 35,910
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 7.98
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 7.18
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  additional-hidden" data-action="click-&gt;select-plan#select" data-monthly-button="buyOrContact" data-yearly-button="buyOrContact" data-monthly-paddle-id="562653" data-monthly-paddle-coupon="" data-yearly-paddle-id="564384" data-yearly-paddle-coupon="" data-paddle-type="plan" data-monthly-plan-preview-url="/switch_plan/9b2161dd-0714-426e-a6e5-2b2a00322ca7" data-yearly-plan-preview-url="/switch_plan/823beaa8-71e0-4d57-a3e8-7832419fd8c3" data-monthly-summary="₹ 52,900 per month" data-yearly-summary="₹ 47,610 per month, billed annually">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                7,500 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 52,900
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 47,610
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 7.05
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 6.35
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  additional-hidden" data-action="click-&gt;select-plan#select" data-monthly-button="buyOrContact" data-yearly-button="buyOrContact" data-monthly-paddle-id="562654" data-monthly-paddle-coupon="" data-yearly-paddle-id="564385" data-yearly-paddle-coupon="" data-paddle-type="plan" data-monthly-plan-preview-url="/switch_plan/6a6037cb-d131-4d6b-96e1-cca791b35451" data-yearly-plan-preview-url="/switch_plan/4dded0e5-a4bd-4b06-9915-12a7ae2947c4" data-monthly-summary="₹ 66,900 per month" data-yearly-summary="₹ 60,210 per month, billed annually">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                10,000 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 66,900
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 60,210
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 6.69
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 6.02
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  additional-hidden" data-action="click-&gt;select-plan#select" data-monthly-button="buyOrContact" data-yearly-button="buyOrContact" data-monthly-paddle-id="562655" data-monthly-paddle-coupon="" data-yearly-paddle-id="564386" data-yearly-paddle-coupon="" data-paddle-type="plan" data-monthly-plan-preview-url="/switch_plan/181c8961-dcad-4c0a-b3bf-e71d26211f69" data-yearly-plan-preview-url="/switch_plan/fb4c9e30-7664-4d89-b786-77c48a1fab7f" data-monthly-summary="₹ 93,900 per month" data-yearly-summary="₹ 84,510 per month, billed annually">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                15,000 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 93,900
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 84,510
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 6.26
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 5.63
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  additional-hidden" data-action="click-&gt;select-plan#select" data-monthly-button="buyOrContact" data-yearly-button="buyOrContact" data-monthly-paddle-id="562656" data-monthly-paddle-coupon="" data-yearly-paddle-id="564387" data-yearly-paddle-coupon="" data-paddle-type="plan" data-monthly-plan-preview-url="/switch_plan/cf4aeb2c-9021-4b23-a3be-350db47b9678" data-yearly-plan-preview-url="/switch_plan/c4d6304e-1f09-4f81-98eb-3e0721f0e378" data-monthly-summary="₹ 149,000 per month" data-yearly-summary="₹ 134,100 per month, billed annually">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                25,000 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 149,000
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 134,100
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 5.96
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 5.36
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  additional-hidden" data-action="click-&gt;select-plan#select" data-monthly-button="buyOrContact" data-yearly-button="buyOrContact" data-monthly-paddle-id="562657" data-monthly-paddle-coupon="" data-yearly-paddle-id="564388" data-yearly-paddle-coupon="" data-paddle-type="plan" data-monthly-plan-preview-url="/switch_plan/9147c33d-9fa5-4980-924f-238d08fcdff8" data-yearly-plan-preview-url="/switch_plan/d4577cff-a7e1-4e45-9414-0b367b613b99" data-monthly-summary="₹ 269,000 per month" data-yearly-summary="₹ 242,100 per month, billed annually">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                50,000 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 269,000
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 242,100
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 5.38
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 4.84
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row  additional-hidden" data-action="click-&gt;select-plan#select" data-monthly-button="buyOrContact" data-yearly-button="buyOrContact" data-monthly-paddle-id="562658" data-monthly-paddle-coupon="" data-yearly-paddle-id="564389" data-yearly-paddle-coupon="" data-paddle-type="plan" data-monthly-plan-preview-url="/switch_plan/3eb15037-a081-4a0a-abff-0f771566748e" data-yearly-plan-preview-url="/switch_plan/70169047-7114-482f-92bb-fb57cd41cba5" data-monthly-summary="₹ 369,000 per month" data-yearly-summary="₹ 332,100 per month, billed annually">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <div>
                                75,000 credits
                                <small className="d-none d-sm-inline">/ month</small>
                                <div className="d-sm-none" style={{ fontSize: '70%' }}>per month</div>
                              </div>

                            </td>
                            <td style={{ fontSize: '80%' }} className="px-0">
                              <div>
                                <div style={{ marginTop: 3 }}>
                                  <span className="price-monthly">
                                    ₹ 369,000
                                  </span>
                                  <span className="price-yearly">
                                    ₹ 332,100
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }} className="px-0">
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="display-monthly-only">
                                    <span className="per-credit-value-monthly">
                                      ₹ 4.92
                                    </span>
                                    / image
                                  </span>
                                  <span className="display-yearly-only" style={{ whiteSpace: 'nowrap' }}>
                                    <span className="per-credit-value-yearly">
                                      ₹ 4.43
                                    </span>
                                    / image
                                  </span>
                                </strong>
                              </div>
                            </td>
                          </tr>                  <tr className="selectable selectable-secondary enterprise-row additional-hidden" data-action="click-&gt;select-plan#select" data-yearly-button="contact" data-monthly-button="contact" data-monthly-summary="Custom plan" data-yearly-summary="Custom plan">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td colspan="3">
                              <span>Custom <small>– Contact us</small></span>
                              <div className="d-none per-credit-value">Get Quote</div>
                            </td>
                            <td>
                              <span className="per-credit-value-monthly per-credit-value-yearly d-none">
                                Custom
                              </span>
                            </td>
                          </tr>                  <tr style={{ lineHeight: 1 }}>
                            <td></td>
                            <td colspan="3">
                              <a style={{ fontSize: '80%', color: '#333', opacity: 0.5, textDecoration: 'underline' }}>Show more</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="plan-interval-select">
                        <a className="interval-option" >Pay Monthly</a>
                        <a className="interval-toggle"></a>
                        <a className="interval-option" >
                          Pay Yearly
                          <span style={{ color: '#FF7272' }}>
                            Save 10%
                          </span>
                        </a>
                      </div>

                      <div className="text-center">
                        <div data-target="select-plan.actionBtn select-plan.buyBtn select-plan.buyOrContactBtn" style={{ display: 'none' }}>
                          <button name="button" type="submit" className="btn btn-primary d-block mx-auto" style={{ minWidth: 170 }}>Subscribe now</button>
                        </div>

                        <button name="button" type="submit" className="btn btn-outline-primary disabled" style={{ minWidth: 170, display: 'none', whiteSpace: 'normal' }} >You are currently subscribed to this plan</button>

                        <button name="button" type="submit" className="btn btn-outline-primary" style={{ minWidth: 170, display: 'none' }} >Downgrade now</button>
                        <button name="button" type="submit" className="btn btn-outline-primary" style={{ minWidth: 170, display: 'none' }} >Upgrade now</button>
                        <button name="button" type="submit" className="btn btn-outline-primary" style={{ minWidth: 170, display: 'none' }}>Switch plan</button>

                        <a className="btn btn-outline-primary" style={{ minWidth: 170, display: 'none', fontSize: '75%', whiteSpace: 'normal' }} href="/support/contact?subject=Change+my+annual+plan">
                          <strong>You are currently subscribed to an annual plan.</strong> To change your subscription, please get in touch with our support.
                        </a>
                        <div className="pt-1" style={{ opacity: 0.8, fontSize: '75%' }}>
                          <span></span>, price incl. VAT, if applicable
                        </div>

                        <div className="py-1" style={{ opacity: 0.8, fontSize: '75%' }} >
                          or
                        </div>

                        <div data-target="select-plan.actionBtn select-plan.buyOrContactBtn select-plan.contactBtn" style={{ display: 'none' }}>
                          <a className="btn btn-outline-primary d-inline-block mx-auto ga-tracked" style={{ minWidth: 170 }} >Contact us</a>
                        </div>
                        <div className="text-primary mx-auto mt-1" style={{ opacity: 0.8, fontSize: '75%', maxWidth: 260 }} >
                          Get a custom plan quote with Enterprise-level support or set up Quality Guarantee
                          <span className="hover-tooltip">
                            <i className="fas fa-info-circle" style={{ opacity: 0.5, fontSize: '80%' }}></i>
                          </span>                </div>
                      </div>
                    </div>
                  </div>
                  <div className="lower">
                    <div className="hover-tooltip">
                      <strong>Risk free:</strong> 14 Days Money Back Guarantee
                      <i className="fas fa-info-circle" style={{ opacity: 0.5, fontSize: '80%' }}></i>
                    </div><div className="hover-tooltip" >
                      <strong>Flexible:</strong> Downgrade, upgrade or cancel any time
                      <i className="fas fa-info-circle" style={{ opacity: 0.5, fontSize: '80%' }}></i>
                    </div><div className="hover-tooltip" >
                      <strong>Fair:</strong> Unused credits roll over as long as you&#39;re subscribed
                      <i className="fas fa-info-circle" style={{ opacity: 0.5, fontSize: '80%' }}></i>
                    </div>
                  </div>
                </div>
                <div className="pricing-column pricing-right">
                  <div className="upper">
                    <h2 className="mb-3" style={{ fontSize: '2rem', fontWeight: 400, }}>Pay as you go</h2>

                    <div data-controller="select-plan" data-select-plan-interval="once">
                      <div style={{ textAlign: 'center', color: '#2699FB', lineHeight: 1, marginBottom: 15 }}>
                        <span className="h3" style={{ fontSize: 40, fontWeight: 400, display: 'inline-block', verticalAlign: 'middle' }} ></span>
                        <span style={{ fontSize: 12, display: 'inline-block', verticalAlign: 'middle', marginLeft: 5, marginTop: 10 }}>/ image</span>
                      </div>

                      <table style={{ margin: '0 auto 20px auto' }} className="plans-table">
                        <tbody>
                          <tr className="selectable plan-row ">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <span>1 credit</span>
                            </td>
                            <td style={{ fontSize: '80%' }}>
                              <div><div style={{ marginTop: 3 }}>₹ 129</div></div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }}>
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="per-credit-value-once">
                                    ₹ 129
                                  </span>
                                  / image
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row active" >
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <span>10 credits</span>
                            </td>
                            <td style={{ fontSize: '80%' }}>
                              <div><div style={{ marginTop: 3 }}>₹ 599</div></div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }}>
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="per-credit-value-once">
                                    ₹ 59.90
                                  </span>
                                  / image
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row " >
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <span>75 credits</span>
                            </td>
                            <td style={{ fontSize: '80%' }}>
                              <div><div style={{ marginTop: 3 }}>₹ 3,290</div></div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }}>
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="per-credit-value-once">
                                    ₹ 43.87
                                  </span>
                                  / image
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row " >
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <span>200 credits</span>
                            </td>
                            <td style={{ fontSize: '80%' }}>
                              <div><div style={{ marginTop: 3 }}>₹ 6,690</div></div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }}>
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="per-credit-value-once">
                                    ₹ 33.45
                                  </span>
                                  / image
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row ">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <span>500 credits</span>
                            </td>
                            <td style={{ fontSize: '80%' }}>
                              <div><div style={{ marginTop: 3 }}>₹ 13,500</div></div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }}>
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="per-credit-value-once">
                                    ₹ 27
                                  </span>
                                  / image
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row ">
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <span>1,200 credits</span>
                            </td>
                            <td style={{ fontSize: '80%' }}>
                              <div><div style={{ marginTop: 3 }}>₹ 26,900</div></div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }}>
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="per-credit-value-once">
                                    ₹ 22.42
                                  </span>
                                  / image
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row " >
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <span>4,000 credits</span>
                            </td>
                            <td style={{ fontSize: '80%' }}>
                              <div><div style={{ marginTop: 3 }}>₹ 67,500</div></div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }}>
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="per-credit-value-once">
                                    ₹ 16.88
                                  </span>
                                  / image
                                </strong>
                              </div>
                            </td>
                          </tr>                    <tr className="selectable plan-row " >
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td>
                              <span>8,000 credits</span>
                            </td>
                            <td style={{ fontSize: '80%' }}>
                              <div><div style={{ marginTop: 3 }}>₹ 115,000</div></div>
                            </td>
                            <td style={{ fontSize: '80%', textAlign: 'right' }}>
                              <div>
                                <strong style={{ display: 'block', marginTop: 3 }}>
                                  <span className="per-credit-value-once">
                                    ₹ 14.38
                                  </span>
                                  / image
                                </strong>
                              </div>
                            </td>
                          </tr>                  <tr className="selectable selectable-secondary enterprise-row additional-hidden" >
                            <td>
                              <i className="active-status-icon fas fa-dot-circle"></i>
                              <i className="active-status-icon fal fa-circle"></i>
                            </td>
                            <td colspan="3">
                              <span>Custom <small>– Contact us</small></span>
                              <div className="d-none per-credit-value">Get Quote</div>
                            </td>
                            <td>
                              <span className="per-credit-value-once d-none">
                                Custom
                              </span>
                            </td>
                          </tr>                  <tr style={{ lineHeight: 1 }}>
                            <td></td>
                            <td colspan="3">
                              <a style={{ fontSize: '80%', color: '#333', opacity: 0.5, textDecoration: 'underline' }}>Show more</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="text-center">
                        <button name="button" type="submit" className="btn btn-outline-primary" style={{ minWidth: 170 }} >
                          Buy now
                        </button>
                        <a className="btn btn-secondary ga-tracked" style={{ minWidth: 170, display: 'none' }} >
                          Contact us
                        </a>
                        <br />
                        <small style={{ opacity: 0.8, fontSize: '75%' }}>
                          <span ></span>, price incl. VAT, if applicable
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="lower">
                    <p>Credits available for use anytime
                      <br />within two years of purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="d-flex mt-4 mb-4">
                <div className="flex-grow-1">
                  <hr />
                </div>
                <div className="pt-1 px-3">
                  <h3 className="h6">All plans include:</h3>
                </div>
                <div className="flex-grow-1">
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div>
                    <i className="fal fa-infinity fa-2x" style={{ color: '#54616C' }}></i>
                  </div>
                  <div style={{ lineHeight: 1.5 }}>
                    <p>Unlimited free previews
                      <br />on offbg
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <i className="fal fa-code fa-2x" style={{ color: '#54616C' }}></i>
                  </div>
                  <div style={{ lineHeight: 1.5 }}>
                    <p>50 free previews
                      <br />via API and apps per month
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <i className="fal fa-magic fa-2x" style={{ color: '#54616C' }}></i>
                  </div>
                  <div style={{ lineHeight: 1.5 }}>
                    <p>offbg for
                      <br />Adobe Photoshop
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <i className="fal fa-desktop-alt fa-2x" style={{ color: '#54616C' }}></i>
                  </div>
                  <div style={{ lineHeight: 1.5 }}>
                    <p>offbg for
                      <br />Windows / Mac / Linux
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <hr className="mt-4 mb-5" />

            <h2 className="text-center pt-2 mb-5">
              Frequently asked questions
            </h2>

            <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>Should I get Pay-as-you-go credits or a subscription?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>For one-off or hard-to-predict image needs, pay as you go credits are a great option.</p><p>For larger or ongoing image needs, you&#39;ll save on every photo that you process with a subscription. With monthly plans starting at just 40 images per month and rollover of any unused credits (up to 5×) you&#39;ll benefit from huge savings without making a huge commitment.</p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>What are credits?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>Credits enable you to use offbg for full resolution cutouts in high quality. You can use credits on offbg, via the offbg API, in our Windows / Mac / Linux app or Photoshop Extension.</p><p>Removing the background from<span className=""> </span><b>1 image requires 1 credit</b>. Preview images are free on offbg and ¼ credit via the offbg apps and API.</p><p>Subscriptions include a monthly budget of credits, that you can use within that month (or roll over to the next month as long as you stay subscribed). Pay-as-you-go credits are valid for up to 2 years after the purchase.</p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>What images are supported?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>You can upload any <b>JPG or PNG image</b> with up to <b>12 megabytes</b>. Images must have a subject that is clearly meant to be the foreground, such as a person, animal, product or car (<a href="/supported-images" target="_blank">more info</a>). If the image resolution is larger than <b>25 megapixels</b> (e.g. 6250 × 4000 pixels or any other aspect ratio) it is resized to this maximum resolution.</p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>What are preview images?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>Preview images are small resolution cutouts with up to 0.25 megapixels (e.g 625 × 400 pixels).</p><p>They are FREE on offbg and significantly cheaper than regular images (¼ credit instead of 1 credit) when requested through the API.</p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>Can I cancel/upgrade/downgrade my subscription?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>Yes, you can cancel, upgrade or downgrade your subscription any time. </p><p>Note: If you cancel your subscription, unused subscription credits can only be used until the end of the billing period. <a href="https://www.offbg/help/a/can-i-upgrade-downgrade-cancel-my-subscription" target="_blank">Read more</a></p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>What if I am unsatisfied with the results?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>At the moment offbg works very well for photos of persons, products and cars, but some images are more challenging than others. We recommend <b>uploading a few images to the </b><a href="/upload"><b>free version</b></a> to get an impression of the quality level for your specific images. You can also try <b>1 image for free </b>by <a href="https://accounts.Offbg.ai/users/sign_in" target="_blank">signing up.</a></p><p>All subscriptions are covered by a <b>14 Day Money Back Guarantee</b>: You get a full refund within 14 days if you are unsatisfied with the results (restricted to 50 downloads). Have a look at our <a href="/refunds" target="_blank">Refund Policy</a>.</p><p><b>Subscriptions with 7,500 credits per month or more: </b>You only pay for images that meet your required quality level. <a href="https://www.offbg/help" target="_blank">Read more about the Quality Guarantee</a>.</p><p><br /></p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>What happens if I don&#39;t use all my subscription credits each month?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>If at the end of the month you have not used all of your subscription credits, the remaining credits roll over to the next month - so you can still use them.</p><p>You can roll over up to 5 × your monthly credit budget. For instance, if you are subscribed to the <i>500 credits / month</i> plan, you get 500 credits each month and on top of that you can roll over up to 2,500 credits from previous months. <a href="https://help.offbg/hc/en-us/articles/360020218973-What-if-I-don-t-spend-all-my-credits-" target="_blank">Learn more</a></p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>What if I run out of credits?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>When you have used 80% of your monthly credits of a subscription, you will be notified via email. Once you have used up all credits, no further background removals are possible until next month (except for preview images on offbg which are always free). Should you need more credits, you can either upgrade your plan or purchase a pay as you go package.</p><p>There are no overage charges. If you want to make sure you never run out of credits, have a look at <a href="https://help.offbg/hc/en-us/articles/360020680393-How-can-I-make-sure-to-never-run-out-of-credits-" target="_blank">this article</a>.</p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>What payment methods do you support?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>We support all major Credit Cards, PayPal and Apple Pay.</p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>What&#39;s the API for?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>You can use our API to integrate the background removal in your website, app or workflow. It&#39;s a simple HTTP-based interface with various options. You can <a href="/api" target="_blank">find the docs here.</a></p><p>Our apps for Windows / Mac / Linux and Photoshop are built on top of the API.</p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>How many images can I process simultaneously through the API?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>You can process <a href="/api#rate-limit" target="_blank">up to 500 images per minute</a>. If you require more than that,<span className=""> </span>get in touch.</p>
            </div></div>      <div data-controller="faq" className="faq p-3"><a data-action="click-&gt;faq#toggle" className="faq-toggle-link" ><div className="float-right text-primary"><i className="fas fa-plus" data-target="faq.iconDefault"></i><i className="fas fa-minus" data-target="faq.iconActive" style={{ display: 'none' }}></i></div>Is offbg GDPR compliant?</a><div className="faq-answer mt-4" data-target="faq.answer" style={{ display: 'none' }}>
              <p>Yes, we are 100% GDPR compliant. You can find more on this topic in our <a href="/privacy" target="_blank">Privacy Policy</a>.</p>
            </div></div>  </div>


          <div className="container">
            <h2 className="text-center mt-5 pt-3 mb-5 pb-3 pt-5">
              <p>Trusted by 28,000+ customers<br />from 200+ countries around the globe</p>
            </h2>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Pricing