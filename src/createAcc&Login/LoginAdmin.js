import eyeFlash from '../icons/EyeSlash.png';

import { Link } from 'react-router-dom';

const LoginAdmin = () => {
  return (
    <div className=" p-6 ">
      <h1 className=" text-[2.5rem] text-primary text-center py-4 font-Lexend font-semibold">Elect.NG</h1>
      <h3 className=" font-Inter font-semibold">Welcome</h3>
      <p className=' font-normal text-sm  mt-2 '>
        Welcome to <span className=' text-primary'>Elect.NG</span> online voting platform.
      </p>
      <div className=" flex items-center p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-4 ">
        <input type="text" placeholder="Admin ID No" className=" focus-within:outline-none " />
      </div>
      <div className=" flex items-center justify-between p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-4 ">
        <input type="text" placeholder="Password" className=" focus-within:outline-none " />
        <img src={eyeFlash} alt="" className=' pr-5' />
      </div>
      <div className=' flex flex-row gap-3 items-center mt-4'>
        <input type="checkbox" className=' w-[20px] h-[20px]' />
        <h3 className="">Remember Password <span className=' ml-3'>Forgot Password?</span></h3>
      </div>
        <button className='font-normal w-[100%] h-[65px] text-secondary bg-primary rounded-[0.625rem] border-[1px] mt-24 border-primary z-10 '>
          Log In
        </button>
      <h3 className=" text-center mt-4 ">Don't have an account? <Link to="/CreateAdmin"> <span className=' ml-2 text-primary'>Create account</span></Link></h3>
    </div>
  );
}

export default LoginAdmin;