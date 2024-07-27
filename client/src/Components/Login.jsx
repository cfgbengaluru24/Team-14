import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { APIURL } from '../env';
import '../styles/Login.css';

const Login = ({ setLoginUser, setIsloggedIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const userRef = useRef();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user.email, user.password]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsClicked(true);
        try {
            await axios.post(`${APIURL}/api/auth/login`, user)
                .then(res => {
                    if (user) {
                        localStorage.setItem("isLoggedIn", true);
                        navigate("/");
                        setSuccess(true);
                        setLoginUser(res.data.user);
                        localStorage.setItem("userDetails", JSON.stringify(res.data.user));
                        toast.success("Logged In", {
                            autoClose: 5000,
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                        setIsloggedIn(true);
                        setIsClicked(false);
                    } else {
                        console.log("Invalid User");
                        setIsClicked(false);
                    }
                });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
            alert("You are not registered please Signup first");
        }
        setIsClicked(false);
    };

    return (
        <div className="login-container">
            <section className="login-section">
                <div className="login-image-container">
                    {/* <img className='login-bg-image'
                        src={bg_img}
                        alt="Sample image" /> */}
                </div>
                <div className="login-form-container">
                    <div className="login-form-header">
                        <p className="login-form-title">Log In</p>
                    </div>

                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleLogin}>
                        <label>Email</label>
                        <input
                            className="login-input"
                            name="email"
                            ref={userRef}
                            autoComplete="off"
                            required
                            value={user.email}
                            onChange={handleChange}
                            type="text"
                            placeholder="Email Address" />

                        <div className='login-password-container'>
                            <label>Password</label>
                            <input
                                className="login-input"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                type={showPassword ? ("text") : ("password")}
                                placeholder="Password"
                                required
                            />
                            <span className="login-eye-icon" onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiFillEye fontSize={24} fill='#AFB2BF' />)}
                            </span>
                        </div>

                        <div className="login-forgot-password">
                            <NavLink to="/password-reset">
                                Forgot Password?
                            </NavLink>
                        </div>
                        <div className="login-submit-container">
                            <button
                                className="login-submit-button"
                                type="submit"
                                disabled={isClicked}
                            >
                                {isClicked ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                        <div className="login-signup">
                            Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Login;
