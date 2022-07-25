import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Faq = () => {
    return (
        <>
            <Header />
            <main id="page-content" >
                <div className='container pt-4'>
                    <h4 style={{ fontWeight: 700 }}>Help & FAQs</h4>


                    <h6 style={{ color: '#000' }} className="mt-4">What is offbg.com?</h6>
                    <p>Offbg.com is a web-based service that allows you to remove any photo's background. It is entirely self-contained. You don't have to separate the background and foreground layers manually. Select your image and receive the output image with the background removed!</p>

                    <h6 style={{ color: '#000' }} >How to integrate Offbg?</h6>
                    <p>
                    The offbg.com API is a dependable building block for third-party apps, offering extensive image processing and design operations in a user-friendly interface for easy integration.
                    <br/><br/>

                    An HTTP interface allows it to be integrated into a variety of environments. You won't have to set up, maintain, or scale any infrastructure because the API is a managed service.
                    </p>

                    <h6 style={{ color: '#000' }} >How can I install offbg.com on Windows?</h6>
                    <p>

                    Offbg.com for Windows allows you to remove picture backgrounds in bulk from your desktop. Follow these steps to set it up:
                    <br/><br/>
                    Installation Instructions for Windows <br/>
                    For Windows, download and run offbg.com.<br/>
                    offbg.com for Windows will be installed and activated automatically after a few seconds.<br/>
                    Shortcuts to your Desktop and Start Menu are also added during the installation.<br/>
                    Follow the instructions in the application to set up your API key and use offbg.com for Windows.<br/>
                    </p>



                    <h6 style={{ color: '#000' }} > Is it possible to upgrade, downgrade, or cancel my subscription?</h6>
                    <p>
                    Yes, you can upgrade, downgrade, or cancel your subscription.<br/>
                    Please note that any outstanding subscription credits can only be utilized until the end of your current monthly term if you cancel your subscription.
                   
<br/><br/>
                    Upgrading/Downgrading<br/>
                    To switch to a new plan, follow these steps:<br/>
                    In your account profile, go to Credits & Plans.<br/>
                    Upgrade / Downgrade the plan of your choice by clicking Upgrade / Downgrade.<br/>
                    Confirm your plan's change.
                    <br/><br/>
                    Your plan will be upgraded immediately:<br/>
                    Your payment method is processed after you confirm, and the credits and services of your new subscription are available.
                    <br/><br/>
                    You will not be invoiced immediately if you downgrade your plan. Instead, your current plan will remain active until the current billing cycle ends, after which the new plan will take effect.
                    <br/><br/>
                    Canceling<br/>
                    To cancel your subscription:<br/>
                    Go to your account profile's Credits & Plan section.<br/>
                    Select Cancel Subscription from the drop-down menu.<br/>
                    Confirm your cancellation by going back to the newly opened window and selecting Cancel Subscription.
                    <br/><br/>
                    Your subscription will be canceled at the end of your current billing term. The remaining credits will be invalidated, and your account will be downgraded to the Free plan.
                    </p>
                    <h6 style={{ color: '#000' }} >  Is offbg.com free?</h6>
                    <p>
                    Yes, offbg.com is completely free to use on the website and for personal uses. You'll also get 50 free previews each month, which you can use with the desktop app or API. Apart from that, offbg.com also provides you with 5 bulk uploads.
                    </p>

                    <h6 style={{ color: '#000' }} >  What happens if I don't use all of my credits?</h6>
                    <p>
                    Subscriptions feature a monthly credit budget that automatically renews. If you haven't spent all of your credits by the end of the month, you won't lose them. You can still use them because they roll over to the next month. Your monthly credit budget can be rolled over up to five times.
                    <br/><br/>
                    Pay-as-you-go credits <br/>
                    A Pay-as-you-go credit plan gives you additional flexibility by allowing you to utilize credits anytime you want: Credits purchased on a pay-as-you-go basis are good for two years of purchases.
                    </p>


                </div>
            </main>
            <Footer />
        </>
    )
}

export default Faq