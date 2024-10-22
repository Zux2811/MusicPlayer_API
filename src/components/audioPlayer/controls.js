import React from 'react';
import './controls.css';
import { IconContext } from 'react-icons';
import { FaPause } from 'react-icons/fa';
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from 'react-icons/io5';

export default function Controls({
    isPlaying,
    setIsPlaying,
    handleNext,
    handlePrev,
}) {
  return (
    <IconContext.Provider value={{size: '35px', color: '#38a3f0'}}>
        <div className='controls_wrapper flex'>
            <div className='action_btn flex' onClick={handlePrev}>
                <IoPlaySkipBack />
            </div>
            <div
                className={
                    isPlaying ? 'play_pause_btn flex active' : 'play_pause_btn flex'
                }
                onClick={() => setIsPlaying(!isPlaying)}
            >
                    {isPlaying ? <FaPause/> : <IoPlay />}
            </div>
            <div className='action_btn flex' onClick={handleNext}>
                <IoPlaySkipForward />
            </div>
        </div>
    </IconContext.Provider>
  );
}
