import { Link } from 'react-router-dom';

import obiImage from '../images/peter obi 2.png';
import obasangoImage from '../images/obasanjo 2 2.png';
import tinubuImage from '../images/bola ahmed tinubu 2.png';
import atikuImage from '../images/atiku 2.png';

import labourLogo from '../images/LP 1.png';
import apcLogo from '../images/APC 1.png';
import pdpLogo from '../images/PDP 1.png';



const SelectedPoll = () => {
  return (
    <div className=' p-6 font-medium' >
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
      <Link to="/VoteCandidate">
        <button className='font-normal w-[100%] h-[65px] text-secondary bg-primary rounded-[0.625rem]' >
          Join A Vote
        </button>
      </Link>
    </div>
  );
}

export default SelectedPoll;