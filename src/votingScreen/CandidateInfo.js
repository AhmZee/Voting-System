import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import electionImage from '../images/election 1.png';
import obiImage from '../images/peter obi 2.png';
import obasangoImage from '../images/obasanjo 2 2.png';
import tinubuImage from '../images/bola ahmed tinubu 2.png';
import atikuImage from '../images/atiku 2.png';

const CustomDialog = ({ isOpen, candidateName, onConfirm, onCancel }) => {
  return (

    <div className={`fixed w-[284px] inset-0 z-10 ${isOpen ? 'flex' : 'hidden'} items-center justify-center m-auto`}>
      <div className='bg-white p-4 rounded border shadow-lg'>
        <h3 className=' text-right ' onClick={onCancel}>x</h3>
        <h3 className=' text-center text-red-500 text-sm mb-4'>Warning!</h3>
        <p className=' text-xs text-center'>Are you sure you want to vote for this candidates? Once confirmed this action cannot be reversed.....</p>
        <div className=' flex flex-grow justify-center gap-5 mt-5'>
          <Link to="/VoteSuccessful">
            <button className=' text-xs text-secondary bg-primary p-[8px] rounded-[3px]' >
              Confirm
            </button>
          </Link>
          <button className=' text-xs text-primary bg-secondary border-[1px] border-primary p-[7px] rounded-[3px] ' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>

  );
};

const VoteCandidate = () => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleVoteClick = (candidateName) => {
    setSelectedCandidate(candidateName);
    setConfirmationOpen(true);
  };

  const handleConfirmVote = () => {

    // After voting, close the confirmation modal
    setConfirmationOpen(false);
  };

  const handleCancelVote = () => {
    // If the user cancels, close the confirmation modal
    setConfirmationOpen(false);
  };

  return (
    <div className='p-6 font-medium '>
      <div className=' flex justify-center mb-3'>
        <img src={obiImage} alt="" />
      </div>
      <h3>Peter Obi</h3>
      <h3 className='text-[rgba(0,0,0,0.60)] text-xs mb-2'>Labour Party (LP)</h3>
      <h3 className=''>Biography</h3>
      <p className=' text-sm text-justify font-normal'>Lorem ipsum dolor sit amet consectetur. Elit tincidunt neque fringilla odio leo ac. Gravida iaculis amet lorem ac a volutpat amet urna. Felis duis ultricies tortor amet ultrices bibendum est volutpat. Eget orci porta est sollicitudin blandit. Tortor mauris lorem interdum odio elementum praesent condimentum dictum a. Pretium quam nec malesuada cursus volutpat mattis. Feugiat arcu ut euismod auctor senectus facilisis.</p>
      <div className=' flex justify-center'>
        <button onClick={() => handleVoteClick('Peter Obi')} className='font-normal w-[80%] h-[3.3125rem] text-secondary bg-primary rounded-[0.625rem] mt-4'  >
          Cast Vote
        </button>
      </div>
      {/* Confirmation Modal */}
      <CustomDialog
        isOpen={isConfirmationOpen}
        candidateName={selectedCandidate}
        onConfirm={handleConfirmVote}
        onCancel={handleCancelVote}
      />
    </div>
  );
}

export default VoteCandidate;
