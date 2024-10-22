import React from 'react'
import { loginEndpoint } from '../../spotify';
import './login.css'

export default function Login() {
  return (
    <div className='login_page'>
        <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png'
        alt='logo spotify'
        className='logo'
        />
        <a href={loginEndpoint}><div className='login_btn'>Login</div></a>
    </div>
  );
}
