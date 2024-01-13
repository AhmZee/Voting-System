import eyeFlash from '../icons/EyeSlash.png';

import { Link } from 'react-router-dom';

const CreateAdmin = () => {
  return (
    <div className=" p-6 ">
      <h1 className=" text-[2.5rem] text-primary text-center font-Lexend font-semibold">Elect.NG</h1>
      <div className=' flex justify-center items-center border-[1px] border-primary w-[139px] h-[42.63px] rounded-[10px]'>
        <Link to="/CreateUser">
          <h4 className=' text-sm text-primary px-[17px] bg-secondary  border-[1px] border-primary rounded-[15px] mr-[-8px] '>User</h4>
        </Link>
        <Link to="/CreateAdmin">
          <h4 className=' text-sm text-secondary px-[10px] bg-primary  border-[1px] border-primary rounded-[15px] z-10 relative'>Admin</h4>
        </Link>
      </div>
      <h3 className=" font-Inter font-semibold">Create Account</h3>
      <div className=" flex items-center p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3 ">
        <input type="text" placeholder="Full Name" className=" focus-within:outline-none " />
      </div>
      <div className=" flex items-center p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3 ">
        <input type="text" placeholder="Phone Number" className=" focus-within:outline-none " />
      </div>
      <div className=" flex items-center p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3 ">
        <input type="text" placeholder="Admin ID No" className=" w-[100%] focus-within:outline-none " />
      </div>
      <div className=" flex items-center justify-between p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3 ">
        <input type="text" placeholder="Password" className=" focus-within:outline-none " />
        <img src={eyeFlash} alt="" className=' pr-5' />
      </div>
      <div className=" flex items-center justify-between p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-3 ">
        <input type="text" placeholder="Re-enter Password" className=" focus-within:outline-none " />
        <img src={eyeFlash} alt="" className=' pr-5' />
      </div>
      <Link to="/PhoneVerification" >
        <button className='font-normal w-[100%] h-[65px] text-secondary bg-primary rounded-[0.625rem] border-[1px] mt-5 border-primary z-10 '>
          Create Account
        </button>
      </Link>
      <h3 className=" text-center mt-4 ">Already have an account? <Link to="/LoginAdmin"><span className=' ml-2 text-primary'>Log In</span></Link></h3>
    </div>
  );
}

export default CreateAdmin;