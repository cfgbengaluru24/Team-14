import React, { useState,useRef,useEffect } from 'react'
// import Logo from "../assets/Logo.png"
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button_comp'
// import profile from "../assets/profile-icon-login-img.jpg"
import classNames from 'classnames';
// import HambergerMenu from './HambergerMenu'

const Nav = ({isloggedIn,userDetails,setUserDetails,setIsloggedIn,loggedIn}) => {
  const navigate = useNavigate();
  const [visibleProfile, setVisibleProfile] = useState(false);
  const divRef = useRef(null);

  // console.log(userDetails)
    
  const handleLogout=()=>{
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userDetails")
    navigate("/login")
    setUserDetails({})
    setIsloggedIn(false)
    setVisibleProfile(false);
  }
  
  const handleLogin=()=>{
    navigate("/login")
    setVisibleProfile(false);
  }
  
  const handleScreenClick  = (event)=>{
    if(divRef.current && !divRef.current.contains(event.target)){
      setVisibleProfile(false);
    }
  };
  
  const handleProfile = ()=>{
    setVisibleProfile(!visibleProfile)
  }
  
  useEffect(()=>{
    document.addEventListener('click',handleScreenClick );
    return ()=>{
      document.removeEventListener('click',handleScreenClick );
    };
  },[]);
  
  
  return (
    <div className='w-full flex items-center justify-center bg-blue-50'>
    <div className='w-11/12 flex justify-between items-center'>
      <div>
        {/* <img className='h-[50px]' src={Logo} alt="Logo" /> */}
      </div>
      {/* <HambergerMenu/> */}
      <div ref={divRef} className='cursor-pointer'>
<<<<<<< HEAD
        <img className='h-[30px]' src="" alt="" onClick={handleProfile} />
=======
        {/* <img className='h-[30px]' src={profile} alt="" onClick={handleProfile} /> */}
>>>>>>> 9feb25ecf4cd0bfee9922989ad57462d209465f7
          <div className={classNames("absolute right-6 top-12 h-fit w-[300px] bg-gray-200 flex flex-col transition-opacity duration-500 ease-in-out opacity-100 z-10 rounded-xl p-4",{"hidden": !visibleProfile,
            "opacity-100": visibleProfile,
          })}>
              {
                loggedIn?
                <div className='font-semibold font-sans'>
                  <h2 className='mb-2'>HELLO!</h2>
                  {userDetails.userType} : {userDetails.name}
                  <p>{userDetails.email}</p>
                  
                  <div onClick={handleLogout} className='w-full flex items-center justify-center mt-4'> 
                    <Button btn="Logout" />
                  </div>
                </div>:
                <div onClick={handleLogin} className='w-full flex items-center justify-center'> 
                  <Button btn="Login" />
                </div>
              }
          </div>
          
          <Link to={`/doctorPortal/${userDetails.name}`}>
            <button>
              Show Appointments
            </button>
          </Link>
      </div>
      </div>
    </div>
  )
}

export default Nav
