import UploadImage1 from '../../assets/icons/UploadSimple.png';

import { Link } from 'react-router-dom';

const CreatePoll1 = () => {
  return (
    <div className=" p-6 m-auto w-[375px] font-Inter h-[100vh] " >
      <h3 className=" font-semibold">Create A Poll</h3>
      <h3 className=" text-sm mt-2 mb-4 opacity-[60%]">Fill in the fields below to create a poll</h3>
      <h3 className=" font-semibold">Poll Title</h3>
      <div className=' flex items-center w-[100%] h-[49px] bg-secondary  rounded-[10px] mb-2 '>
        <input type="text" placeholder="Type your poll title" className=' pl-3 text-sm focus-within:outline-none' />
      </div>
      <h3 className=" font-semibold">Poll Images</h3>
      <div className=' flex items-center justify-between w-[100%] h-[49px] bg-secondary  rounded-[10px] mb-2' >
        <input type="text" placeholder="Upload image" className=' pl-3 text-sm focus-within:outline-none' />
        <img src={UploadImage1} alt="" className=' pr-6' />
      </div>
      <h3 className=" font-semibold">Poll Type</h3>
      <div className=' flex items-center w-[100%] h-[49px] bg-secondary  rounded-[10px] mb-2 '>
        <input type="text" placeholder="" className=' pl-3 text-sm focus-within:outline-none' />
      </div>

      <div>
        <div className=' flex flex-row justify-between '>
          <div>
            <h3 className=" font-semibold">Start Date</h3>
            <div className=' flex items-center h-[49px] bg-secondary  rounded-[10px] mb-2 py-5 '>
              <input type="date" placeholder="" className=' pl-3 text-sm pr-4 bg-secondary focus-within:outline-none' />
            </div>
          </div>
          <div>
            <h3 className=" font-semibold">Time</h3>
            <div className=' flex items-center h-[49px] bg-secondary  rounded-[10px] mb-2 py-5 '>
              <input type="Time" placeholder="" className=' pl-3 text-sm pr-4  bg-secondary focus-within:outline-none' />
            </div>
          </div>
        </div>
        <div className=' flex flex-row justify-between '>
          <div>
            <h3 className=" font-semibold">End Date</h3>
            <div className=' flex items-center h-[49px] bg-secondary  rounded-[10px] mb-2 py-5 '>
              <input type="date" placeholder="" className=' pl-3 text-sm pr-4 bg-secondary focus-within:outline-none' />
            </div>
          </div>
          <div>
            <h3 className=" font-semibold text-transparent">Time</h3>
            <div className=' flex items-center h-[49px] bg-secondary  rounded-[10px] mb-2 py-5 '>
              <input type="Time" placeholder="" className=' pl-3 text-sm pr-4 bg-secondary focus-within:outline-none' />
            </div>
          </div>
        </div>
      </div>

      <h3 className=" font-semibold ">Voting Restrictions</h3>
      <select name="" id="" className='w-[100%] h-[49px] rounded-[10px]  bg-secondary mb-2 pl-2 focus-within:outline-none'>
        <option value="">One Vote per IP address</option>
        <option value="">Two Votes per IP address</option>
      </select>
      <Link to="/home/create-poll2">
        <button className=' w-[100%] h-[65px] text-secondary bg-primary rounded-[10px] mt-2'>
          Create Poll
        </button>
      </Link>

    </div>
  );
}

export default CreatePoll1;