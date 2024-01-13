import { Link } from 'react-router-dom';

const PhoneVerification = () => {
  return (
    <div className=" p-6 ">
      <h1 className=" text-[2.5rem] text-primary text-center py-4 font-Lexend font-semibold">Elect.NG</h1>
      <p className=' font-semibold '>
        Phone Number Verification
      </p>
      <p className=' text-sm mt-9'>
        We've sent a 6- digit OTP code to 07068****10
        Please input the code here to verify your phone number.
      </p>
      <div className=" flex items-center p-[10px] border-[1px] border-primary w-[100%] h-[65px] rounded-[10px] mt-14 mb-3 ">
        <input type="text" value="6-4-2-3-8-1" placeholder="Admin ID No" className=" pl-5 font-semibold focus-within:outline-none " />
      </div>
      <p>OTP Expires in <span className=' font-semibold'>3:24</span></p>
      <Link to="/VerificationSuccess">
        <button className='font-normal w-[100%] h-[65px] text-secondary bg-primary rounded-[0.625rem] border-[1px] mt-24 border-primary z-10 '>
          Verify Phone Number
        </button>
      </Link>
    </div >
  );
}

export default PhoneVerification;