import balot from '../images/ballot.png';

import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="">
      <div className="absolute top-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="184" height="287" viewBox="0 0 184 287" fill="none">
          <path d="M197.46 286C175.647 295 187.774 221.5 47.4604 136C-92.8533 50.5 114.618 -14 197.46 -14C280.303 -14 185.46 25.1573 185.46 108C185.46 190.843 219.274 277 197.46 286Z" fill="#0CBB5C" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="186" height="284" viewBox="0 0 186 284" fill="none">
          <path d="M-12.3137 0.74823C9.5 -8.25177 -2.62741 65.2482 137.686 150.748C278 236.248 70.529 300.748 -12.3137 300.748C-95.1564 300.748 -0.313671 261.591 -0.313671 178.748C-0.313671 95.9055 -34.1273 9.74823 -12.3137 0.74823Z" fill="#0CBB5C" />
        </svg>
      </div>
      <div className=" flex flex-col items-center text-base pt-[150px] font-Inter font-semibold">
        <h3 className=" font-Inter">Welcome to</h3>
        <h1 className=" text-[2.5rem] text-primary py-4 font-Lexend font-semibold">Elect.NG</h1>
        <h3>An online voting app</h3>
        <img src={balot} alt="balot" />
        <Link to="/WelcomeCast" className=" z-10 ">
          <button className=' font-normal w-[17.125rem] h-[3.3125rem] mt-6 text-secondary bg-primary rounded-[0.625rem] z-10' >
            Register as a voter
          </button>
        </Link>
        <button className=' font-normal w-[17.125rem] h-[3.3125rem] text-primary bg-secondary rounded-[0.625rem] border-[1px] mt-5 border-primary z-10'>
          Register as an admin
        </button>
      </div>
    </div>
  );
}

export default Welcome;