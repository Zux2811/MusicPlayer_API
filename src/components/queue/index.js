import React from 'react';
import './queue.css';

export default function Queue({ tracks, setCurrentIndex}) {
  return (
    <div className='queue_container flex'>
      <div className='queue flex'>
        <p className='upNext'>Up Next</p>
        <div className='queue_list'>
          {tracks?.map((track, index) => (
            <div key={index + 'key'} className='queue_item flex' onClick={() => setCurrentIndex(index)}>
              <p className='track_name'>{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
