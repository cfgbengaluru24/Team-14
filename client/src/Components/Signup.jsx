import React, { useState, useRef, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { APIURL } from '../env';
import '../styles/Signup.css';

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_ ]{3,23}$/;
const EMAIL_REGEX =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [userType, setUserType] = useState("User");
  const [secretKey, setSecretKey] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);
  
  useEffect(() => {
    setValidName(USER_REGEX.test(user.name));
  }, [user.name]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(user.email));
  }, [user.email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(user.password));
    setValidMatch(user.password === user.confirmPassword);
  }, [user.password, user.confirmPassword]);

  useEffect(() => {
    setErrMsg('');
  }, [user.name, user.password, user.confirmPassword, user.email]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    setIsClicked(true);
    if (userType === "Admin" && secretKey !== "team14") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
      const v1 = USER_REGEX.test(user.name);
      const v2 = PWD_REGEX.test(user.password);
      const v3 = EMAIL_REGEX.test(user.email);
      if (!v1 || !v2 || !v3) {
        setErrMsg("Invalid Entry");
        return;
      }
      try {
        const { name, email, password, confirmPassword } = user;
        if (name && email && password === confirmPassword) {
          const X = { ...user, userType };
          await axios.post(`${APIURL}/api/auth/signup`, X)
            .then(res => {
              navigate("/login");
              setSuccess(true);
              toast.success("Account created. Please log in.");
              setUser({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
              });
              setIsClicked(false);
            });
        } else {
          alert("Please fill all the fields");
          setIsClicked(false);
        }
      } catch (err) {
        if (!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 409) {
          setErrMsg('Username Taken');
        } else {
          setErrMsg('Registration Failed');
        }
        errRef.current.focus();
      }
      setIsClicked(false);
    }
  };

  return (
    <>
      <section className="signup-section">
        <div className="signup-image-container">
          {/* <img className="signup-image" src={bg_img} alt="Sample image" /> */}
        </div>
        <div className="signup-form-container">
          <div className="form-header">
            <p className="header-text">Sign Up</p>
          </div>
          <div className="form-radio-group">
            Register as:
            <label className="radio-label">
              <input 
                type="radio" 
                name="UserType"
                value="User"
                onChange={(e) => setUserType(e.target.value)}
                checked={userType === "User"}
                className="radio-input"
              />
              <span className="radio-text">User</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="UserType"
                value="Admin"
                onChange={(e) => setUserType(e.target.value)}
                checked={userType === "Admin"}
                className="radio-input"
              />
              <span className="radio-text">Admin</span>
            </label>
          </div>

          <p ref={errRef} className={errMsg ? "error-message" : "offscreen"} aria-live="assertive">{errMsg}</p>

          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input 
                className="form-input"
                type="text" 
                name="name" 
                id="username"
                ref={userRef}
                onChange={handleChange}
                value={user.name}
                placeholder="Enter Name"
                autoComplete="off" 
                required
                aria-invalid={validName ? "false" : "true"}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                className="form-input"
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                value={user.email}
                placeholder="Email Address"
                autoComplete="off" 
                required
                aria-invalid={validEmail ? "false" : "true"}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
            </div>

            <div className="form-group relative">
              <label htmlFor="password">Password</label>
              <input 
                className="form-input"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleChange}
                value={user.password}
                placeholder="Password"
                required
                aria-invalid={validPwd ? "false" : "true"}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <span className="password-eye" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <AiFillEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiFillEye fontSize={24} fill='#AFB2BF' />}
              </span>
            </div>

            <div className="form-group relative">
              <label htmlFor="confirm_pwd">Confirm Password</label>
              <input 
                className="form-input"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirm_pwd"
                onChange={handleChange}
                value={user.confirmPassword}
                placeholder="Confirm Password"
                required
                aria-invalid={validMatch ? "false" : "true"}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <span className="password-eye" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? <AiFillEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiFillEye fontSize={24} fill='#AFB2BF' />}
              </span>
            </div>

            {userType === "Admin" && (
              <div className="form-group">
                <label htmlFor="secret_key">Secret Key</label>
                <input 
                  className="form-input"
                  type="text"
                  name="UserType"
                  id="secret_key"
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder="Secret Key"
                />
              </div>
            )}
            
            <div className="form-button">
              <button 
                className="submit-button"
                type="submit"
                disabled={!validName || !validPwd || !validMatch || isClicked}
              >
                {isClicked ? "Signing up.." : "Sign Up"}
              </button>
            </div>
            <div className="form-footer">
              Already have an account? <Link to="/login" className="link-text">Sign In</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
