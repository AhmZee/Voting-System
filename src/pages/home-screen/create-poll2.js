import uploadIcon from '../../assets/icons/Vector.png';

import SideBar from '../../components/sidebar';

import { Link } from 'react-router-dom';

const CreatePoll2
  = () => {
    return (
      <div>
        <div className=' px-8 hidden gap-3 myLS:flex  items-center pt-6 '>
          <h1 className=" text-[2.5rem] text-primary py-4 font-Lexend font-semibold mr-16 ">Elect.NG</h1>
          <div className='  '>
          </div>
        </div>
        <div className=' flex gap-8 '>
          <div className=' hidden myLS:block '>
            <SideBar />
          </div>
          <div className=" p-6 m-auto w-[375px] font-Inter h-[100vh] myLS:m-0 myLS:mt-[-80px] " >
            <h3 className=" font-semibold">Create A Poll</h3>
            <h3 className=" text-sm mt-2 mb-4 ">Fill in the fields below to create a poll</h3>
            <h3 className=" font-semibold">Poll Title</h3>
            <div className=' flex items-center w-[100%] h-[49px] bg-secondary  rounded-[10px] mb-2 '>
              <input type="text" placeholder="Type your poll title" className=' pl-3 text-sm focus-within:outline-none' />
            </div>
            <h3 className=" font-semibold">Poll Description</h3>
            <textarea name="" id="" cols="30" rows="4" className=' bg-secondary  rounded-[10px] mb-2 w-[100%] p-3 text-sm focus-within:outline-none' ></textarea>
            <div className=' grid grid-cols-2 gap-3'>
              <div className=' w-[160px] '>
                <div className=' flex flex-col justify-center items-center text-sm bg-secondary w-[160px] h-[108px] rounded-[10px] border-[0.5px] border-dotted border-[rgba(0,0,0,0.26)]'>
                  <img src={uploadIcon} alt="" className=' pb-2 pt-5 ' />
                  <h3 className=' text-[rgba(0,0,0,0.26)]'>Drag files to upload</h3>
                </div>
                <h3 className=' text-center m-auto w-[123px] text-secondary  bg-primary p-1 mt-3 '>Browse files</h3>
              </div>
              <div className=' w-[160px] '>
                <div className=' flex flex-col justify-center items-center text-sm bg-secondary w-[160px] h-[108px] rounded-[10px] border-[0.5px] border-dotted border-[rgba(0,0,0,0.26)]'>
                  <img src={uploadIcon} alt="" className=' pb-2 pt-5 ' />
                  <h3 className=' text-[rgba(0,0,0,0.26)]'>Drag files to upload</h3>
                </div>
                <h3 className=' text-center m-auto w-[123px] text-secondary  bg-primary p-1 mt-3 '>Browse files</h3>
              </div>
              <div className=' w-[160px] '>
                <div className=' flex flex-col justify-center items-center text-sm bg-secondary w-[160px] h-[108px] rounded-[10px] border-[0.5px] border-dotted border-[rgba(0,0,0,0.26)]'>
                  <img src={uploadIcon} alt="" className=' pb-2 pt-5 ' />
                  <h3 className=' text-[rgba(0,0,0,0.26)]'>Drag files to upload</h3>
                </div>
                <h3 className=' text-center m-auto w-[123px] text-secondary  bg-primary p-1 mt-3 '>Browse files</h3>
              </div>
              <div className=' w-[160px] '>
                <div className=' flex flex-col justify-center items-center text-sm bg-secondary w-[160px] h-[108px] rounded-[10px] border-[0.5px] border-dotted border-[rgba(0,0,0,0.26)]'>
                  <img src={uploadIcon} alt="" className=' pb-2 pt-5 ' />
                  <h3 className=' text-[rgba(0,0,0,0.26)]'>Drag files to upload</h3>
                </div>
                <h3 className=' text-center m-auto w-[123px] text-secondary  bg-primary p-1 mt-3 '>Browse files</h3>
              </div>
            </div>
            <Link to="/home/upload">
              <button className=' w-[100%] h-[65px] text-secondary bg-primary rounded-[10px] mt-2'>
                Add A File
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default CreatePoll2;