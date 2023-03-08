import React from 'react';
import Logo from '../assets/image.png'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img className='h-[50px]' src={Logo} alt=''/>
        </a>
        <button className='btn btn-sm'> contact</button>
      </div>

    </div>
  </header>;
};

export default Header;
