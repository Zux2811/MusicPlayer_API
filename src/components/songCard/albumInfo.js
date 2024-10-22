import React from 'react';
import './albumInfo.css';

export default function AlbumInfo({ album }) {
    console.log(album);

    const artists = [];
    album?.artists?.forEach(element =>{
        artists.push(element.name);
    });

  return (
    <div className='albumInfo_card'>
        <div className='albumName_comtainer'>
            <div className='marquee'>
                <p>{album?.name + ' - ' + artists?.join(', ')}</p>
            </div>
        </div>
        <div className='album_info'>
            <p>{`${album?.name} is a ${album?.album_type} by ${artists?.join(', ')} with ${album?.total_tracks}`}</p>
        </div>
        <div className='album_release'>
            <p>Release Date: {album?.release_date}</p>
        </div>
    </div>
  );
}
