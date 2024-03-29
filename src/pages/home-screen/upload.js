import SideBar from '../../components/sidebar';

import { Link } from 'react-router-dom';

import obiImage from '../../assets/images/peter obi 2.png';
import obasangoImage from '../../assets/images/obasanjo 2 2.png';
import tinubuImage from '../../assets/images/bola ahmed tinubu 2.png';
import atikuImage from '../../assets/images/atiku 2.png';


const Upload = () => {
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
          <h3 className=" font-semibold ">Upload Files</h3>
          <h3 className=" text-sm mt-2 mb-4">UPLOADING</h3>
          <div className=' flex gap-3 items-start w-[100%] border-b-[1px] border-[rgba(0,0,0,0.20)]  mb-4'>
            <div className=' flex items-center w-[258px] h-[80px] bg-[rgba(11,234,113,0.16)]  gap-3 '>
              <img src={obiImage} alt="" className=' w-[65px] h-[57.676px] rounded-[10px] ml-4 ' />
              <div className=' flex flex-col justify-center'>
                <h3 className=" font-semibold ">Photo 1.jpg</h3>
                <h3 className=" font-semibold opacity-[0.6] ">Queued...</h3>
              </div>
            </div>
            <div className=' w-[60px]'>
              <p className=' text-right'>X</p>
              <p className=' text-primary'>80%</p>
            </div>
          </div>
          <div className=' flex items-center w-[100%] h-[80px] border-b-[1px] border-[rgba(0,0,0,0.20)] gap-3 mb-4 '>
            <img src={obasangoImage} alt="" className=' w-[65px] h-[57.676px] rounded-[10px] ml-4 ' />
            <div className=' flex flex-col justify-center'>
              <h3 className=" font-semibold ">Photo 2.jpg</h3>
              <h3 className=" font-semibold opacity-[0.6] ">Queued...</h3>
            </div>
          </div>
          <div className=' flex items-center w-[100%] h-[80px] border-b-[1px] border-[rgba(0,0,0,0.20)] gap-3 mb-4 '>
            <img src={tinubuImage} alt="" className=' w-[65px] h-[57.676px] rounded-[10px] ml-4 ' />
            <div className=' flex flex-col justify-center'>
              <h3 className=" font-semibold ">Photo 3.jpg</h3>
              <h3 className=" font-semibold opacity-[0.6] ">Queued...</h3>
            </div>
          </div>
          <h3 className=" font-semibold opacity-[0.6] ">COMPLETED</h3>
          <div className=' flex items-center w-[100%] h-[80px] border-b-[1px] border-[rgba(0,0,0,0.20)] gap-3 mb-4 '>
            <img src={atikuImage} alt="" className=' w-[65px] h-[57.676px] rounded-[10px] ml-4 ' />
            <div className=' flex flex-col justify-center'>
              <h3 className=" font-semibold ">Photo 1.jpg</h3>
              <h3 className=" font-semibold opacity-[0.6] ">2min ago</h3>
            </div>
          </div>
          <Link to="/home/poll-create-success">
            <button className=' w-[100%] h-[65px] text-secondary bg-primary rounded-[10px] mt-2'>
              Done
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Upload;