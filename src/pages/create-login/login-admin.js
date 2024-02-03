import eyeSolid from '../../assets/icons/eye-solid.svg';
import eyeSlash from '../../assets/icons/eye-slash-solid.svg';



import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginAdmin = () => {

  const [showPassword, setShowPassword] = useState(true)
  const [eyeSlashChange, setEyeSlashChange] = useState(true)
  
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleEyeSlashChange = () => {
    setEyeSlashChange(!eyeSlashChange)
  }

  return (
    <div className=" p-6 m-auto w-[375px] font-Inter h-[100vh] ">
      <h1 className=" text-[2.5rem] text-primary text-center py-4 font-Lexend font-semibold">Elect.NG</h1>
      <h3 className=" font-Inter font-semibold">Welcome</h3>
      <p className=' font-normal text-sm  mt-2 '>
        Welcome to <span className=' text-primary'>Elect.NG</span> online voting platform.
      </p>
      <div className=" flex items-center bg-secondary p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-4 ">
        <input type="number" placeholder="Admin ID No" className=" focus-within:outline-none " />
      </div>
      <div className=" flex items-center bg-secondary justify-between p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-4 ">
        <input type={showPassword ? 'password' : 'text' } placeholder="Password" className=" focus-within:outline-none " />
        <img src={eyeSlashChange ? eyeSlash : eyeSolid} alt="" className=' w-[40px] pr-5' onClick={() => { handleShowPassword(); handleEyeSlashChange()}} />
      </div>
      <div className=' flex flex-row gap-3 items-center mt-4'>
        <input type="checkbox" className=' w-[20px] h-[20px]' />
        <h3 className=" text-sm ">Remember Password <span className=' ml-1'>Forgot Password?</span></h3>
      </div>
        <button className='font-normal w-[100%] h-[65px] text-secondary bg-primary rounded-[0.625rem] border-[1px] mt-24 border-primary z-10 '>
          Log In
        </button>
      <h3 className=" text-center mt-4 ">Don't have an account? <Link to="/account"> <span className=' ml-2 text-primary'>Create account</span></Link></h3>
    </div>
  );
}

export default LoginAdmin;