import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../Portfolio/Header/Header';
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthService from '../../Services/auth.service'
import { useDispatch } from 'react-redux';
import { addActions } from '../../Store/features/user.slice';


const Auth = () => {

    const [type, setType] = useState('');
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const [showPassword, setToShowPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const location = useLocation();

    useEffect(() => {
        setType(location?.pathname?.includes('/auth/login') ? 'login' : 'signup');
    }, [location]);

    const login = async (data) => {
        try {
            const res = await AuthService.login(data);
            dispatch(addActions({ actions: res?.actions }));
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            if (error?.response?.status === 400) {
                setError('email', {
                    message: error?.response?.data?.message
                }, {
                    shouldFocus: true
                })
            }
        }
    }

    const signup = async (data) => {
        try {
            const res = await AuthService.register(data);
            dispatch(addActions({ actions: res?.actions }));
            navigate('/dashboard');

        } catch (error) {
            console.log(error);
            if (error?.response?.status === 400) {
                setError('email', {
                    message: error?.response?.data?.message
                }, {
                    shouldFocus: true
                })
            }
        }
    }

    return (
        <>
            <Header />
            <main id="page-content">
                <div className="header">
                    <h1 className="h2">
                        {
                            type === 'login' ? '  Login with your Account' : 'Create a new Offbg Account'
                        }

                    </h1>
                    {
                        type === 'login' && (
                            <p>or create a <a onClick={() => navigate('/auth/signup')} style={{ color: '#2699FB', cursor: 'pointer' }}>new account</a> for free</p>
                        )
                    }

                </div>
                <div className="container" style={{ maxWidth: 480 }}>
                    <div className="card card-with-shadow">
                        <ul className="nav nav-fill nav-card-tabs">
                            <li className="nav-item">
                                <a onClick={() => navigate('/auth/login')} class={`nav-link ${type === 'login' ? 'active' : ''}`} >Login</a>
                            </li>      <li className="nav-item">
                                <a onClick={() => navigate('/auth/signup')} class={`nav-link ${type === 'signup' ? 'active' : ''}`} >Sign up</a>
                            </li>    </ul>
                        <div className="card-body">
                            {/* <div className="text-center"> */}
                            {/* <form className="button_to" method="post" action="/users/auth/facebook"><button className="btn btn-login mb-2 oauth-login-button" type="submit">
                                    <img className="btn-login__icon" src="/assets/login_facebook-e4f71915bb42ac7f7c61a4936a8981f6182aa26cdd485efb8ab913a58e630856.svg" />
                                    Continue with Facebook
                                </button></form>
                                <form className="button_to" method="post" action="/users/auth/google_oauth2"><button className="btn btn-login mb-2 oauth-login-button" type="submit">
                                    <img className="btn-login__icon" src="/assets/login_google-2cb4e02cffa10e473b6e3549e711d537a2311783b8ddf497d3f2616a2784d41f.svg" />
                                    Continue with Google
                                </button></form> */}
                            {/* <div className="d-flex my-3">
                                    <div className="flex-grow-1">
                                        <hr />
                                    </div>
                                    <div className="text-muted text-center pt-1 px-3">
                                        or
                                    </div>
                                    <div className="flex-grow-1">
                                        <hr />
                                    </div>
                                </div> */}

                            {/* </div> */}

                            {
                                type === 'signup' && (
                                    <div className='alert alert-info text-center'>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div style={{ fontSize: 30, lineHeight: '30px' }}>
                                                    <i className="fal fa-image"></i>
                                                </div>
                                                <div>
                                                    <strong>1 Free Image</strong><br />
                                                    up to 25 megapixels
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div style={{ fontSize: 30, lineHeight: '30px' }}>
                                                    <i className="fal fa-code"></i>
                                                </div>
                                                <div>
                                                    <strong>50 Free API previews</strong><br />
                                                    per month
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            {
                                type == 'login' ? (
                                    <form className="hcaptcha-form" onSubmit={handleSubmit(login)} autoComplete='off'>

                                        <div className="form-group">

                                            <label className="form-label">
                                                Email Address
                                            </label>
                                            <input type="text"
                                                {...register("email", {
                                                    required: 'Required Input', pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: 'Invalid Email'
                                                    }
                                                })}
                                                className="form-control" placeholder="name@address.com" />
                                            {
                                                errors?.email && (
                                                    <small className='text-danger mt-3 ms-3'>{errors?.email?.message}</small>
                                                )
                                            }

                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col px-0">
                                                    <label className="form-label">
                                                        Password
                                                    </label>

                                                </div>
                                            </div>

                                            <div className="input-group input-group-merge">
                                                <input
                                                    {...register("password", { required: 'Required Input', minLength: { value: 6, message: 'Minimum length of 8 characters required' } })}
                                                    className="form-control" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" />

                                                <span className="input-group-text" style={{ cursor: 'pointer' }} onClick={() => setToShowPassword(!showPassword)}>
                                                    {
                                                        showPassword ? (
                                                            <FaEyeSlash />
                                                        ) : (

                                                            <FaEye />
                                                        )
                                                    }
                                                </span>

                                            </div>
                                            {
                                                errors?.password && (
                                                    <small className='text-danger mt-3 ms-3'>{errors?.password?.message}</small>
                                                )
                                            }
                                        </div>
                                        <div className="actions text-center">

                                            <div className="text-center">
                                                <button className="hcaptcha-submit btn btn-primary btn-lg px-5" type='submit'>Log in</button>
                                            </div>
                                        </div>
                                    </form>
                                ) : (
                                    <form className="hcaptcha-form" onSubmit={handleSubmit(signup)} autoComplete='off'>

                                        <div className="form-group">

                                            <label className="form-label">
                                                Name
                                            </label>
                                            <input type="text"
                                                {...register("name", {
                                                    required: 'Required Input'
                                                })}
                                                className="form-control" placeholder="Name" />
                                            {
                                                errors?.name && (
                                                    <small className='text-danger mt-3 ms-3'>{errors?.name?.message}</small>
                                                )
                                            }

                                        </div>
                                        <div className="form-group">

                                            <label className="form-label">
                                                Email Address
                                            </label>
                                            <input type="text"
                                                {...register("email", {
                                                    required: 'Required Input', pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: 'Invalid Email'
                                                    }
                                                })}
                                                className="form-control" placeholder="name@address.com" />
                                            {
                                                errors?.email && (
                                                    <small className='text-danger mt-3 ms-3'>{errors?.email?.message}</small>
                                                )
                                            }

                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col px-0">
                                                    <label className="form-label">
                                                        Password
                                                    </label>

                                                </div>
                                            </div>

                                            <div className="input-group input-group-merge">
                                                <input
                                                    {...register("password", { required: 'Required Input', minLength: { value: 6, message: 'Minimum length of 8 characters required' } })}
                                                    className="form-control" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" />

                                                <span className="input-group-text" style={{ cursor: 'pointer' }} onClick={() => setToShowPassword(!showPassword)}>
                                                    {
                                                        showPassword ? (
                                                            <FaEyeSlash />
                                                        ) : (

                                                            <FaEye />
                                                        )
                                                    }
                                                </span>

                                            </div>
                                            {
                                                errors?.password && (
                                                    <small className='text-danger mt-3 ms-3'>{errors?.password?.message}</small>
                                                )
                                            }
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="1" id="user_remember_me" className='mr-2' />
                                                I agree to the <span style={{ color: 'blue', cursor: 'pointer' }}>Terms of Service</span>, <span style={{ color: 'blue', cursor: 'pointer' }}>General Terms</span> and <span style={{ color: 'blue', cursor: 'pointer' }}>Conditions and Privacy Policy</span>.
                                            </label>
                                        </div>
                                        <div className="actions text-center mt-3">

                                            <div className="text-center">
                                                <button className="hcaptcha-submit btn btn-primary btn-lg px-5" type='submit'>Sign up</button>
                                            </div>
                                        </div>
                                    </form>

                                )
                            }
                        </div>
                    </div>

                    {/* <div className="small mt-3 mb-5">
                        <div className="my-2">
                            <a href="/users/password/new">Forgot your password?</a>
                        </div>

                        <div className="my-2">
                            <a href="/users/confirmation/new">Didn&#39;t receive confirmation instructions?</a>
                        </div>

                        <div className="my-2">
                            <a href="/users/unlock/new">Didn&#39;t receive unlock instructions?</a>
                        </div>
                    </div> */}

                </div>

            </main>
        </>
    )
}

export default Auth