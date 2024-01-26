import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import electionImage from '../images/election 1.png';
import obiImage from '../images/peter obi 2.png';
import obasangoImage from '../images/obasanjo 2 2.png';
import tinubuImage from '../images/bola ahmed tinubu 2.png';
import atikuImage from '../images/atiku 2.png';

const VoteCandidate = () => {
  return (
    <div className=' p-6 font-medium text-center'>
      <div className=' relative flex justify-center mb-3 '>
        <img src={electionImage} alt="" />
        <h2 className=' absolute w-[16.5rem] text-xl/10 text-center font-bold text-secondary top-10 '>Presidential Election 2023 Nationwide</h2>
      </div>
      <h3 className=' '>Ongoing votes</h3>
      <h3 className=' text-primary text[0.875rem] '>40,320,261 votes</h3>
      <h3 className=' mb-2 '>Voting ends in 8 hours</h3>
      <div className=' flex flex-row items-center h-[87px] bg-secondary rounded-[10px] mb-2'>
        <img src={obiImage} alt="" className=' w-[50px] h-[50px] rounded-[50%] ml-2 mr-4' />
        <div className=' flex flex-col gap-1 '>
          <h3 className=''>Peter Obi</h3>
          <h3 className=' text-xs text-[rgba(0,0,0,0.60)]'>Labour Party (LP)</h3>
        </div>
        <Link to="/CandidateInfo">
          <button className=' text-sm text-secondary bg-primary px-[0.7rem] py-[0.2rem] rounded-[5px] absolute right-12'>Vote</button>
        </Link>
      </div>
      <div className=' flex flex-row items-center  h-[87px] bg-secondary rounded-[10px] mb-2'>
        <img src={obasangoImage} alt="" className=' w-[50px] h-[50px] rounded-[50%] ml-2 mr-4' />
        <div className=' flex flex-col gap-1 '>
          <h3 className=''>Olusegun Obasanjo</h3>
          <h3 className=' text-xs text-[rgba(0,0,0,0.60)]'>People Democratic Party</h3>
        </div>
        <button className=' text-sm text-secondary bg-primary px-[0.7rem] py-[0.2rem] rounded-[5px] absolute right-12'>Vote</button>
      </div>
      <div className=' flex flex-row items-center h-[87px] bg-secondary rounded-[10px] mb-2'>
        <img src={tinubuImage} alt="" className=' w-[50px] h-[50px] rounded-[50%] ml-2 mr-4' />
        <div className=' flex flex-col gap-1 '>
          <h3 className=''>Bola Ahmed Tinubu</h3>
          <h3 className=' text-xs text-[rgba(0,0,0,0.60)]'>All Progressive Congress</h3>
        </div>
        <button className=' text-sm text-secondary bg-primary px-[0.7rem] py-[0.2rem] rounded-[5px] absolute right-12'>Vote</button>
      </div>
      <div className=' flex flex-row items-center h-[87px] bg-secondary rounded-[10px] mb-2'>
        <img src={atikuImage} alt="" className=' w-[50px] h-[50px] rounded-[50%] ml-2 mr-4' />
        <div className=' flex flex-col gap-1 '>
          <h3 className=''>Atiku Abubakar</h3>
          <h3 className=' text-xs text-[rgba(0,0,0,0.60)]'>People Democratic Party</h3>
        </div>
        <button className=' text-sm text-secondary bg-primary px-[0.7rem] py-[0.2rem] rounded-[5px] absolute right-12'>Vote</button>
      </div>
    </div>
  );
}

export default VoteCandidate;