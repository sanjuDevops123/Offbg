import React, { useEffect, useRef, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import axios from 'axios'
import {v4} from 'uuid'

const Upload = () => {

    const [images, setImages] = useState([]);
    const uploadRef = useRef(null);

    const readURL = file => {
        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onload = e => res(e.target.result);
            reader.onerror = e => rej(e);
            reader.readAsDataURL(file);
        });
    };

    const aaa = async (e) => {
        if (e.target.files) {
            console.log(Array.from(e.target.files))
            const Oimages = [];
            document.body.classList.add('loading-indicator');
            await Promise.all(Array.from(e.target.files).map(async q => {
                const fd = new FormData();
                fd.append('file', q);
                try {
                    const res = await axios.post('https://offbg.com:5000/remove-bg',fd);
                   if(res?.data && res.data?.image) {
                    Oimages.push({
                        id: v4(),
                        output: `https://offbg.com:5000/${res.data?.image}`,
                        original: await readURL(q),
                        type: 'output'
                    })
                   }
                } catch (error) {
                    document.body.classList.remove('loading-indicator');
                    console.log(error)
                }
                return q
            }))
            document.body.classList.remove('loading-indicator');
            setImages(Oimages)
        }
    }


    return (
        <>
            <Header />
            <main id="page-content">

                <div style={{ paddinBottom: 40, transition: 'background .3s' }}>


                    <div className='container'>
                        <div style={{
                            textAlign: 'center',
                            padding: '60px 0'
                        }}>
                            {
                                !images.length && (
                                    <h1 className='d-flex justify-content-center'>
                                        <span className='col-sm-9 d-block'>
                                            Upload an image to remove the background
                                        </span>
                                    </h1>
                                )
                            }
                            <div className="mx-auto" style={{ maxWidth: 350 }}>
                                <div className="card card-with-shadow card-rounded-max card-without-border upload-widget-card"><div className="card-body text-center">
                                    {
                                        !images.length && (
                                    <div className="mt-5 mb-4 d-none d-md-block">
                                        </div> 
                                        )
                                    }
                                        <div >
                                        <input type={"file"} ref={uploadRef} onChange={aaa} accept="image/*" multiple style={{ display: 'none' }} />
                                        <button className="btn btn-primary btn-lg" style={{ maxWidth: 225 }}
                                            onClick={() => uploadRef.current.click()}><i className="fas fa-upload"></i>
                                            Upload Image
                                        </button></div> <div className="mt-2 mb-4 d-none d-md-block">
                                        or drop a file
                                    </div></div> 
                                    {
                                        !images.length && (

                                    <div className="card-footer small text-muted text-center d-none d-md-block">
                                        Paste image or
                                        <a className="text-muted select-photo-url-btn" style={{ textDecoration: 'underline' }}>URL</a>
                                        <span className="d-inline-block border bg-white px-1 rounded ml-2">ctrl</span> + <span className="d-inline-block border bg-white px-1 rounded">v</span></div>
                                        )
                                    }
                                        </div></div>
                            <div className="mt-4 text-center mx-auto" style={{ fontSize: '60%', opacity: 0.5, maxWidth: 385 }}><span >By uploading an image or URL you agree to our <a target="_blank" className="text-dark font-weight-bold" href="/tos">Terms of Service</a>. This site is protected by hCaptcha and its <a target="_blank" rel="noopener" className="text-dark font-weight-bold" href="https://hcaptcha.com/privacy">Privacy Policy</a> and <a target="_blank" rel="noopener" className="text-dark font-weight-bold" href="https://hcaptcha.com/terms">Terms of Service</a> apply.
                            </span></div>
                        </div>
                    </div>
                    {images.length > 0 && images.map(q => (
                        <>

                            <div className='container'>
                                <div className='upload-list'>

                                    <div className="upload d-flex flex-column" ><div style={{ flex: '1 1 0%' }}><div className="row" style={{ height: '100%', minHeight: 245 }}>
                                        <div className="col-md-8"><div>
                                            <ul className="nav nav-tabs" style={{ marginLeft: -8 }}>
                                                <li className="nav-item">
                                                    <a className={`nav-link ${q?.type === 'original' ? 'active' : ''}`}
                                                        onClick={() => setImages(images.map(d => d.id === q.id ? ({ ...d, type: 'original' }) : d))}>
                                                        Original
                                                    </a></li>
                                                <li className="nav-item">
                                                    <a className={`nav-link ${q?.type === 'output' ? 'active' : ''}`}
                                                        onClick={() => setImages(images.map(d => d.id === q.id ? ({ ...d, type: 'output' }) : d))}>Removed Background
                                                    </a></li></ul>
                                        </div>
                                            <div className="upload-tabs">
                                                <div className={`upload-tab justify-content-center ${q?.type === 'original' ? 'active' : ''}`}>
                                                    <div className="d-inline-flex" style={{ maxWidth: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                                        <div className='img-wrapper' style={{ boxShadow: 'none', height: 400 }}>
                                                            <img src={q?.original} className="img-fluid"  />
                                                        </div></div></div>
                                                <div className={`upload-tab upload-tab-second justify-content-center ${q?.type === 'output' ? 'active' : ''}`}>
                                                    <div className='img-wrapper' style={{height: 400}}>
                                                        <img src={q?.output} className="img-fluid" style={{
                                                            backgroundImage: "url('/img/bg.jpeg')",
                                                           
                                                           
                                                        }} />
                                                    </div>
                                                </div></div>

                                            <div className="d-flex align-items-center justify-content-center text-center pt-2"><div>
                                            </div></div>
                                        </div>
                                        <div className="col-md-4 py-md-3 d-flex flex-column align-items-center justify-content-center text-center fade-in-on-render">
                                            <div className="d-flex flex-grow-1 flex-shrink-1 flex-column align-items-center justify-content-center download-buttons"><div className="d-flex flex-row flex-md-column right-column"><div className="my-3 w-100">
                                                <div className="mb-1">
                                                    <a href={q?.output} download={q?.output}  target="_blank" rel="noopener" className="btn btn-primary btn-download mr-2 mr-md-0">
                                                    Download</a></div>
                                                <div className="text-muted small"><div><span className="d-block d-md-inline">Preview Image</span> <div className="d-block d-md-inline">
                                                    520 × 480
                                                    <span className="hover-tooltip" ><i className="fas fa-info-circle"></i>
                                                    </span></div></div></div></div>
                                                <div className="mb-3 mt-3 mt-md-0 w-100"><div className="mb-1">
                                                    <button className="btn btn-download ml-2 ml-md-0 btn-outline-primary">Download HD</button></div> <div className="text-muted small"><div><span className="d-block d-md-inline">Full Image</span> <div className="d-block d-md-inline">
                                                        963 × 889
                                                        <span className="hover-tooltip" ><i className="fas fa-info-circle"></i></span></div>
                                                    </div></div></div></div> <div>
                                                </div> <div>
                                                </div></div></div></div> <a className="btn image-result--delete-btn" onClick={() => setImages(images.filter(d =>  d.id != q?.id))}>×</a></div>
                                    </div>
                                </div>
                            </div>

                        </>
                    ))
                    }


                </div>
            </main>
            <Footer />
        </>
    )
}

export default Upload