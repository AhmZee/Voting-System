import { Link } from 'react-router-dom';

const VerificationSuccess = () => {
  return (
    <div className=" p-6 m-auto w-[375px] font-Inter h-[100vh] ">
      <div className=' flex justify-center items-center bg-primary w-[150px] h-[150px] rounded-[50%] m-auto opacity-[80%] mt-20 mb-10'>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="79" viewBox="0 0 80 79" fill="none">
          <path d="M76.5755 2.05557C75.8412 1.57898 75.0202 1.25173 74.1593 1.09252C73.2985 0.933314 72.4148 0.945265 71.5586 1.12769C70.7023 1.31012 69.8905 1.65945 69.1693 2.15572C68.4481 2.65199 67.8318 3.28549 67.3555 4.02001L30 61.6L11.7822 44.7556C11.1394 44.1613 10.3859 43.6994 9.56468 43.3963C8.74343 43.0932 7.87052 42.9548 6.99579 42.9891C5.2292 43.0582 3.56244 43.8264 2.36219 45.1245C1.16194 46.4225 0.526507 48.1443 0.595687 49.9109C0.664867 51.6774 1.43299 53.3442 2.73108 54.5445L26.6511 76.66C26.6511 76.66 27.3377 77.2511 27.6555 77.4578C28.3899 77.9347 29.2111 78.2623 30.0722 78.4217C30.9332 78.581 31.8173 78.5692 32.6737 78.3867C33.5302 78.2043 34.3423 77.8549 35.0637 77.3584C35.785 76.8619 36.4015 76.2282 36.8777 75.4933L78.54 11.2756C79.0166 10.5412 79.3438 9.72022 79.503 8.85939C79.6622 7.99856 79.6503 7.1148 79.4678 6.2586C79.2854 5.40239 78.9361 4.59051 78.4398 3.86934C77.9436 3.14817 77.3101 2.53185 76.5755 2.05557Z" fill="white" />
        </svg>
      </div>
      <h1 className=' text-5xl text-center font-Lexend font-medium'>Verification Successful</h1>
      <p className=' text-sm text-center mt-5'>
        Welcome to Elect.NG
      </p>
      <Link to="/home/home-page">
        <button className='font-normal w-[100%] h-[65px] text-secondary bg-primary rounded-[0.625rem] border-[1px] mt-24 border-primary z-10 '>
          Go To Home
        </button>
      </Link>
    </div >
  );
}

export default VerificationSuccess;