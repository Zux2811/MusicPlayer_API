import React, {useState, useEffect} from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdDashboard } from "react-icons/md";
import { BiSolidCrown } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { BiSolidHeart } from "react-icons/bi";
import { IoLibrarySharp } from "react-icons/io5";
import { IoExit } from "react-icons/io5";
import apiClient from '../../spotify';

export default function Sidebar() {
  const [image, setImage] = useState(
    'https://i.pinimg.com/736x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg'
  );
  useEffect(() => {
    apiClient.get('me').then((response) => {
      setImage(response.data.images[0].url);
    });
  },[])
  return (
    <div className='sidebar_container'>
        <img src={image} className='profile_img' alt='profile' />
        <div>
            <SidebarButton title='Feed' to='/feed' icon={<MdDashboard />} />
            <SidebarButton title='Trending' to='/trending' icon={<BiSolidCrown />} />
            <SidebarButton title='Player' to='/player' icon={<FaPlay />} />
            <SidebarButton
              title='Favorties'
              to='/favorites'
              icon={<BiSolidHeart />}
            />
            <SidebarButton title='Library' to='/' icon={<IoLibrarySharp />} />
        </div>
        <SidebarButton title='Sign Out' to='' icon={<IoExit />} />
    </div>
  );
}
