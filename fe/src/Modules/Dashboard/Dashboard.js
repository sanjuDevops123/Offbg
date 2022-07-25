import React from 'react'
import Footer from '../Portfolio/Footer/Footer'
import Header from '../Portfolio/Header/Header'

const Dashboard = () => {
  return (
      <>
      <Header />
      <main id="page-content" className="">

    
<section className="header header-backdrop header-backdrop-blue-green position-relative overflow-hidden">
<div className="container">
<div className="d-none d-md-block sprite sprite-circle-bottom" style={{position: 'absolute', top: '50%', left: 0, color: '#E7F5F8', opacity: 0.5}}></div>
  <h1>
    My Dashboard
  </h1>
  <p className="lead">
    surya sv
  </p>
</div>
</section>
<div className="container" style={{maxWidth: 960}}>

  <div className="card card-with-shadow mb-5">
    <ul className="nav nav-fill nav-card-tabs">
      <li className="nav-item"><a href="#credits-plan" className="nav-link active" aria-controls="credits-plan" role="tab" data-toggle="tab">Credits &amp; Plan</a></li>
      <li className="nav-item"><a href="#payment-billing" className="nav-link" aria-controls="payment-billing" role="tab" data-toggle="tab">Payment &amp; Billing</a></li>
      <li className="nav-item"><a href="#api-key" className="nav-link" aria-controls="api-key" role="tab" data-toggle="tab">API Keys</a></li>
      <li className="nav-item"><a href="#earn" className="nav-link " aria-controls="credits" role="tab" data-toggle="tab">Earn credits</a></li>
      <li className="nav-item"><a href="#account-settings" className="nav-link" aria-controls="credits" role="tab" data-toggle="tab">Account Settings</a></li>
    </ul>

    <div className="card-body">

      <div style={{marginTop: 20}}></div>

      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="credits-plan">



  <div className="text-center">

    <div className="row row-eq-height">
      <div className="col-md-3 d-flex flex-column justify-content-center">
        <div>
          <div style={{lineHeight: 1, color: '#2699FB'}}>
            <span className="dashboard-credit-balance" style={{fontSize: 40, fontWeight: 'bold'}}>1</span><span style={{fontWeight: 'normal'}}>.00</span>
          </div>
          <div className="mt-2 font-weight-bold">
            Total Credits
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <div className="py-3 position-relative mt-5 mt-md-0 ml-md-3" style={{background: '#F7F9FA'}}>

          <div className="dashboard-balance-arrow"></div>
          <div className="row">
            <div className="col-md-4">
              <div style={{fontSize: 30, lineHeight: 1, color: '#2699FB', marginTop: 9}}>
                0<span style={{fontSize: 12}}>.00</span>
              </div>
              <div className="mb-4 mb-md-1" style={{fontSize: '90%', marginTop: 5}}>
                <strong>Subscription Credits</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{fontSize: 30, lineHeight: 1, color: '#2699FB', marginTop: 9}}>
                1<span style={{fontSize: 12}}>.00</span>
              </div>
              <div className="mb-4 mb-md-1" style={{fontSize: '90%', marginTop: 5}}>
                <strong>Pay as you go Credits</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{fontSize: 26, lineHeight: 1, marginTop: 14}}>
                50
                <small>
                  of
                </small>
                50
              </div>
              <div style={{fontSize: '90%', marginTop: 5}}>
                <strong>Free Previews via API</strong>
                <span className="hover-tooltip" >
                  <i className="fas fa-info-circle" style={{opacity: 0.75, fontSize: '90%'}}></i>
</span>              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <hr className="my-4" />
  <div className="row text-center" style={{marginTop: 20}}>
    <div className="col">
      <h5>
        Your plan and credits
      </h5>
    </div>
  </div>
  <div className="row text-center" style={{marginTop: 20}}>
    <div className="col-12 col-md px-md-1" style={{marginBottom: 20}}>
      <p style={{marginBottom: '0.5em'}}>
                <span style={{color: '#2699FB'}}>
                    <strong>Free Plan</strong>
                </span>
      </p>

        <div style={{fontSize: '70%', lineHeight: 1.25}} className="mb-0">
          Non-commercial use only
        </div>

        <div style={{fontSize: '70%', lineHeight: 1.25}}>
          You get 0 new credits
on Jun 18, 2022

          <span className="hover-tooltip" >
            <i className="fas fa-info-circle" style={{opacity: 0.75, fontSize: '90%'}}></i>
</span>        </div>

      <p style={{marginTop: 15, marginBottom: '0.25em'}}>
        <a className="btn btn-primary btn-outline" href="/pricing">Upgrade Subscription</a>
      </p>


    </div>
    <div className="col-12 col-md px-md-1" style={{marginBottom: 20}}>
      <p className="" style={{color: '#2699FB',marginBottom: '0.5em'}}>
        <strong>Your Pay as you go credits</strong>
      </p>
      <p style={{fontSize: '70%'}}>
                  1 credits
        <span className="hover-tooltip">
          <i className="fas fa-info-circle" style={{opacity: 0.75, fontSize: '90%'}}></i>
</span>      </p>
      <p style={{marginBottom: '0.25em'}}>
        <a className="btn btn-primary" href="/pricing">Buy Credits</a>
      </p>
    </div>
  </div>

  <hr className="my-4" />

  <div className="text-center">

    <h3 className="h5">
      Account Log
    </h3>

    <div className="my-4">
      <a className="btn btn-outline-secondary m-2" href="/usage">
        Usage Chart
</a>      <a className="btn btn-outline-secondary m-2" href="/credit_transactions">
        Transaction History
</a>    </div>
  </div>
</div>


        <div role="tabpanel" className="tab-pane" id="api-key">
         
        </div>
        <div role="tabpanel" className="tab-pane " id="earn">
          

          <div data-controller="referrals">

            <h3 className="h5">
              Invite Friends and Earn Credits
            </h3>

            <p>
              You'll receive <strong>1 credit</strong> when the person you invite signs up
for a off.bg account, and they'll also get 1 extra credit to get started
(on top of the 1 credit for signing up). Win-Win!

            </p>

            <h4 className="h5 mt-4">
              Invite a friend
            </h4>

            <div className="input-group" style={{maxWidth: 500}}>
              <input type="text" name="" id="" value="" placeholder="Enter email address" className="form-control" data-target="referrals.email" />
              <span className="input-group-append">
                <button className="btn btn-primary" data-action="click->referrals#sendEmail"><i className="fas fa-paper-plane"></i> Send invite</button>
              </span>
            </div>

            <h4 className="h5 mt-4">
              Share on Social Media
            </h4>

            <a className="btn btn-outline-twitter" target="_blank" data-action="click-&gt;referrals#shareOnTwitter" href="https://twitter.com/intent/tweet?text=Remove%20Image%20Backgrounds%20100%25%20automatically%20https%3A%2F%2Fwww.off.bg%2Fr%2FYuuJo7sYfHfZdnTLCctzvLiv&amp;via=remove_bg">
              <i className="fab fa-twitter fa-fw"></i>
              Tweet
</a>            <a className="btn btn-outline-facebook" target="_blank" data-action="click-&gt;referrals#shareOnFacebook" href="https://www.facebook.com/sharer/sharer.php?u=https://www.off.bg/r/YuuJo7sYfHfZdnTLCctzvLiv">
              <i className="fab fa-facebook-f fa-fw"></i>
              Share
</a>
            <h4 className="h5 mt-4">
              Share this link
            </h4>

            <div className="input-group" style={{maxWidth: 500, float: 'left', marginRight: 15}}>
              <input type="text" name="" id="" value="https://www.off.bg/r/YuuJo7sYfHfZdnTLCctzvLiv" className="form-control" readonly="readonly" />
              <span className="input-group-append">
                <button className="btn btn-outline-primary" ><i className="fas fa-copy"></i> Copy to clipboard</button>
              </span>
            </div>

            <span className="small text-success" style={{float: 'left', paddingTop: 6, display: 'none'}} >
              <i className="fas fa-check"></i> Copied
            </span>

            <div className="clearfix"></div>
          </div>

        </div>
        <div role="tabpanel" className="tab-pane" id="payment-billing">
          <h3 className="h5">
            Payment Method
          </h3>

            <p>
              You have no payment methods configured.
            </p>

          <h3 className="h5 mt-4">
            Billing History
          </h3>

            <p>
              Your payment history is empty.
            </p>
        </div>
        <div role="tabpanel" className="tab-pane" id="account-settings">
          <div className="text-center my-5">
            <p className="mb-4">
              <strong>Want to change your account email or password, or delete your account?</strong>
            </p>
            <p>
              <a target="_blank" className="btn btn-outline-primary" href="https://accounts.Offbg.ai/?locale=en">
                Manage Offbg Account <i className="fas fa-external-link-alt"></i>
</a>            </p>
          </div>
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

export default Dashboard