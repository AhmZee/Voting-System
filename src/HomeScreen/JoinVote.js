import { Link } from 'react-router-dom';

import coteOfArm from '../images/download (3) 1.png';
import missWorld from '../images/pagent 1.png';
import bbNaija from '../images/bbn 1.png';
import mtnProject from '../images/mtn 1.png';


const JoinVote = () => {
  return (
    <div className=' p-6 font-medium'>
      <div className=' mb-6 '>
        <h1 className=' font-[700] text-[2.25rem] px-4 py-2 bg-[rgba(146,227,169,0.29)] inline-block font-Lexend text-4xl text-primary rounded-[50%] mr-5 '>J</h1>
        <h3 className=' inline-block '>Hello James</h3>
      </div>
      <h3 className=' '>Join a Vote</h3>
      <h3 className=' text-[rgba(0,0,0,0.60)] mb-2 '>Kindly select a vote you want to join </h3>
      <div className=' flex justify-between mb-2'>
        <h3 className=' '>Recent Polls</h3>
        <h3 className=' text-[rgba(12,187,92,0.40)] '>See All</h3>
      </div>
      <Link to="/SelectedPoll">
        <div className=' flex flex-row gap-4 items-center mb-2'>
          <img src={coteOfArm} alt="" />
          <h3 className=' inline-block '>Nigeria 2023</h3>
        </div>
      </Link>
      <div className=' flex flex-row gap-4 items-center mb-2'>
        <img src={missWorld} alt="" />
        <h3 className=' inline-block '>Miss World</h3>
      </div>
      <div className=' flex flex-row gap-4 items-center mb-2'>
        <img src={bbNaija} alt="" />
        <h3 className=' inline-block '>BBnaija Season 7</h3>
      </div>
      <div className=' flex flex-row gap-4 items-center mb-2'>
        <img src={mtnProject} alt="" />
        <h3 className=' inline-block '>Mtn Project Fame</h3>
      </div>
    </div>
  );
}

export default JoinVote;