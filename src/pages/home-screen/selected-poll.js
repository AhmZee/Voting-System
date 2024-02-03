import { Link } from 'react-router-dom';

import obiImage from '../../assets/images/peter obi 2.png';
import obasangoImage from '../../assets/images/obasanjo 2 2.png';
import tinubuImage from '../../assets/images/bola ahmed tinubu 2.png';
import atikuImage from '../../assets/images/atiku 2.png';

import SideBar from '../../components/sidebar';
import SearchBar from '../../components/searchbar';

import labourLogo from '../../assets/images/LP 1.png';
import apcLogo from '../../assets/images/APC 1.png';
import pdpLogo from '../../assets/images/PDP 1.png';



const SelectedPoll = () => {
  return (
    <div>
      <div className=' px-8 hidden gap-3 myLS:flex  items-center pt-6 '>
        <h1 className=" text-[2.5rem] text-primary py-4 font-Lexend font-semibold mr-16 ">Elect.NG</h1>
        <div className='  '>
          <SearchBar />
        </div>
      </div>
      <div className=' flex gap-8 '>
        <div className=' hidden myLS:block '>
          <SideBar />
        </div>
        <div className=' p-6 m-auto w-[375px] font-Inter h-[100vh] font-medium myLS:m-0' >
          <h3 className=' mb-4 '>Nigeria 2023</h3>
          <h3 className=' mb-2 '>Presidential Election 2023</h3>
          <div className=' flex flex-row items-center gap-3 h-[87px] bg-secondary rounded-[10px] mb-4'>
            <img src={obiImage} alt="" className=' w-[50px] h-[50px] rounded-[50%] ml-2 mr-4' />
            <div className=' flex flex-col gap-1 mr-12 '>
              <h3 className=''>Peter Obi</h3>
              <h3 className=' text-xs text-[rgba(0,0,0,0.60)]'>Labour Party (LP)</h3>
            </div>
            <img src={labourLogo} alt="" className=' w-[50px]  m-auto' />
          </div>
          <div className=' flex flex-row items-center gap-3 h-[87px] bg-secondary rounded-[10px] mb-4'>
            <img src={obasangoImage} alt="" className=' w-[50px] h-[50px] rounded-[50%] ml-2 mr-4' />
            <div className=' flex flex-col gap-1'>
              <h3 className=''>Olusegun Obasanjo</h3>
              <h3 className=' text-xs text-[rgba(0,0,0,0.60)]'>People Democratic Party</h3>
            </div>
            <img src={pdpLogo} alt="" className=' m-auto' />
          </div>
          <div className=' flex flex-row items-center gap-3 h-[87px] bg-secondary rounded-[10px] mb-4'>
            <img src={tinubuImage} alt="" className=' w-[50px] h-[50px] rounded-[50%] ml-2 mr-4' />
            <div className=' flex flex-col gap-1'>
              <h3 className=''>Bola Ahmed Tinubu</h3>
              <h3 className=' text-xs text-[rgba(0,0,0,0.60)]'>All Progressive Congress</h3>
            </div>
            <img src={apcLogo} alt="" className=' m-auto' />
          </div>
          <div className=' flex flex-row items-center gap-3 h-[87px] bg-secondary rounded-[10px] mb-7'>
            <img src={atikuImage} alt="" className=' w-[50px] h-[50px] rounded-[50%] ml-2 mr-4' />
            <div className=' flex flex-col gap-1'>
              <h3 className=''>Atiku Abubakar</h3>
              <h3 className=' text-xs text-[rgba(0,0,0,0.60)]'>People Democratic Party</h3>
            </div>
            <img src={pdpLogo} alt="" className=' m-auto' />
          </div>
          <Link to="/voting/vote-candidate">
            <button className='font-normal w-[100%] h-[65px] text-secondary bg-primary rounded-[0.625rem]' >
              Join A Vote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectedPoll;