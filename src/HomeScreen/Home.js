import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=' p-6 font-bold font-Inter text-center '>
      <h1 className=' pt-24 font-Lexend text-4xl text-primary '>
        Welcome
      </h1>
      <p className=' font-normal text-center text-sm w-[18.5rem]  m-auto pt-5 pb-20'>
        Welcome to <span className=' text-primary '>ELECT.NG</span> Online Voting System
        Your account has been created successfully
        Let’s Get Started
      </p>
      <Link to="/CreatePoll1">
        <button className='font-normal w-[95%] h-[65px] text-secondary bg-primary rounded-[0.625rem]'>
          Create A Poll
        </button>
      </Link>
      <Link to="/Home">
        <button className='font-normal w-[95%] h-[65px] text-primary bg-secondary rounded-[0.625rem] border-[1px] mt-5 border-primary'>
          Join A Vote
        </button>
      </Link>
    </div>
  );
}

export default Home;