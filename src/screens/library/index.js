import React, { useEffect, useState } from 'react';
import APIKit from '../../spotify';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import './library.css';
import { useNavigate } from 'react-router-dom';

export default function Library() {
    const [playlist, setPlaylists] = useState(null);

    useEffect(() => {
      APIKit.get('me/playlists').then(function (response){
        setPlaylists(response.data.items);
        console.log(response.data.items);
      });
    }, []);

    const navigate = useNavigate();

    const playPlaylist = (id) => {
      navigate('/player', { state: { id: id } });
    };

  return (
    <div className='screen_container flex'>
      <div className='library_body'>
        {playlist?.map((playlist) => (
          <div className='playlist_card' key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
              <img
                src={playlist.images[0].url}
                className='playlist_image'
                alt='Playlist_alt'
              />

              <p className='playlist_title'>{playlist.name}</p>
              <p className='playlist_subtitle'>{playlist.tracks.total} Songs </p>
              <div className='playlist_fade'>
                <IconContext.Provider value={{ size: '50px', color: '#1b7bbf'}}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
