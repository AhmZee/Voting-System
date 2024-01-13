import vote1 from '../images/vote1.png';

import { Link } from 'react-router-dom';

const WelcomeCast = () => {
  return (
    <div className=' p-6 font-bold font-Inter text-center '>
      <Link to="/WelcomeStay">
        <h2 className=' text-right'>Skip</h2>
      </Link>
      <img src={vote1} alt="vote1" className=' m-auto mt-12' />
      <h2 className=' my-5 font-Lexend'>
        Cast your vote
      </h2>
      <p className=' font-normal text-sm w-[17.25rem] m-auto'>
        Exercise your voting right, let your
        voice be heard with the right vote
      </p>
      <svg className=' m-auto my-6 ' xmlns="http://www.w3.org/2000/svg" width="102" height="4" viewBox="0 0 102 4" fill="none">
        <path d="M2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4V0ZM2 4L42 4V0L2 0V4Z" fill="black" />
        <path d="M52 0C50.8954 0 50 0.89543 50 2C50 3.10457 50.8954 4 52 4V0ZM52 4L72 4V0L52 0V4Z" fill="black" fill-opacity="0.2" />
        <path d="M82 0C80.8954 0 80 0.89543 80 2C80 3.10457 80.8954 4 82 4V0ZM82 4L102 4V0L82 0V4Z" fill="black" fill-opacity="0.2" />
      </svg>
      <Link to="/WelcomeMake">
        <button className='font-normal w-[100%] h-[3.3125rem] text-primary bg-secondary rounded-[0.625rem] border-[1px] mt-5 border-primary z-10'>
          Next
        </button>
      </Link>
    </div>
  );
}

export default WelcomeCast;