import React, { useState, useEffect } from 'react';
import './LoginSignup.css'
import { Link } from 'react-router-dom';
import log from '../../images/undraw_maker_launch_crhe.svg'
import register from '../../images/undraw_press_play_bx2d.svg'
import { Button } from 'react-bootstrap';
const LoginSignup = () => {
        const [classNames, setClassName] = useState(``);
        const [slider, setSlider] = useState(false);
        useEffect(()=>{
            setClassName(`${slider ? "sign-up-mode" : "" }`)
        }, [slider]);



    return (
        <>
              <div id="container-wrap" className={classNames}>
                <div className="forms-container">
                      <div className="signin-signup" action="">
                        <form  action="" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i class="fas fa-envelope"></i>
                                <input type="email" name="email"  placeholder="Email"required/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password"  name="password"  placeholder="Password"/>
                            </div>
                            <input type="submit" value="Login" id="btn"/>
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <Link  className="social-icon">
                                <i className="fab fa-google"></i>
                                </Link>
                                <Link className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                                </Link>
                            </div>
                        </form>

                        <form action="" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input name="name" type="text" placeholder="Username" required/>
                            </div>
                            <div className="input-field">
                                <i class="fas fa-envelope"></i>
                                <input type="email" name="email"  placeholder="Email"required/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" name="password" placeholder="Password" required/>
                            </div>
                            <input value="Sign Up"  type="submit"  id="btn"/>
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <Link className="social-icon">
                                <i className="fab fa-google"></i>
                                </Link>
                                <Link   className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                                </Link>
                            </div>
                        </form>
                        </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur fugit dicta, dolorum libero quas?</p>
                             <Button onClick={() => setSlider(slider => !slider)} className="btn transparent" id="sign-up-btn"> Sign up</Button>
                        </div>
                        <img src={log} className="image" alt="img"/>
                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur fugit dicta, dolorum libero quas?</p>
                            <Button  onClick={() => setSlider(slider => !slider)}  className="btn transparent" id="sign-in-btn">Sign in</Button>
                        </div>
                        <img src={register} className="image" alt="img"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginSignup;