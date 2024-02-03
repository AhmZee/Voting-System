import eyeSolid from '../../assets/icons/eye-solid.svg';
import eyeSlash from '../../assets/icons/eye-slash-solid.svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const CreateAccount = () => {

  const [showPassword, setShowPassword] = useState(true)
  const [showPassword2, setShowPassword2] = useState(true)
  const [eyeSlashChange, setEyeSlashChange] = useState(true)
  const [eyeSlashChange2, setEyeSlashChange2] = useState(true)
  const [createUser, setCreateUser] = useState(true)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2)
  }
  const handleEyeSlashChange = () => {
    setEyeSlashChange(!eyeSlashChange)
  }
  const handleEyeSlashChange2 = () => {
    setEyeSlashChange2(!eyeSlashChange2)
  }

  const handleUserAccount = () => {
    setCreateUser(true)
  }

  const handleAdminAccount = () => {
    setCreateUser(false)
  }

  return (
    <div className=" p-6 m-auto w-[375px] font-Inter h-[100vh] ">
      <h1 className=" text-[2.5rem] text-primary text-center font-Lexend font-semibold">Elect.NG</h1>
      <div className='flex justify-center items-center border-[1px] border-primary w-[139px] h-[42.63px] rounded-[10px]'>
        <button
          className={`text-sm ${createUser ? 'text-secondary bg-primary z-10' : 'text-primary bg-secondary'} px-[17px] border-[1px] border-primary rounded-[15px] mr-[-8px]  relative`}
          onClick={handleUserAccount}
        >
          User
        </button>
        <button
          className={`text-sm ${!createUser ? 'text-secondary bg-primary z-10' : 'text-primary bg-secondary'} px-[10px] border-[1px] border-primary rounded-[15px] `}
          onClick={handleAdminAccount}
        >
          Admin
        </button>
      </div>
      <h3 className=" font-Inter font-semibold">Create Account</h3>
      <div className=" flex items-center bg-secondary p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3  ">
        <input name='name' type="text" placeholder="Full Name" className=" focus-within:outline-none " />
      </div>
      <div className=" flex items-center bg-secondary p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3 ">
        <input name='phone' type="number"  placeholder='Phone Number'  className=" focus-within:outline-none " />
      </div>
      <div className=" flex items-center bg-secondary p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3 ">
        <input name='ID' type="number"  placeholder={createUser ? 'Voter’s Identification Number(optional)' : 'Admin ID No'} className=" w-[100%] focus-within:outline-none " />
      </div>
      <div className=" flex items-center bg-secondary justify-between p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3 ">
        <input name='password' type={showPassword ? 'password' : 'text'} placeholder="Password" className=" focus-within:outline-none " />
        <img src={eyeSlashChange ? eyeSlash : eyeSolid} alt="" className=' w-[40px] pr-5' onClick={() => { handleShowPassword(); handleEyeSlashChange() }} />
      </div>
      <div className=" flex items-center bg-secondary justify-between p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3 ">
        <input name='password' type={showPassword2 ? 'password' : 'text'} placeholder="Password" className=" focus-within:outline-none " />
        <img src={eyeSlashChange2 ? eyeSlash : eyeSolid} alt="" className=' w-[40px] pr-5' onClick={() => { handleShowPassword2(); handleEyeSlashChange2() }} />
      </div>
      <Link to="/account/phone-verification" >
        <button className='font-normal w-[100%] h-[65px] text-secondary bg-primary rounded-[0.625rem] border-[1px] mt-5 border-primary z-10 '>
          Create Account
        </button>
      </Link>
      <h3 className=" text-center mt-4 ">Already have an account? <Link to="/account/login-user"><span className=' ml-2 text-primary'>Log In</span></Link></h3>
    </div>
  );
}

export default CreateAccount;