import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkClass = ({ isActive }) => isActive ? 'text-red-500' : '';

  return (
    <div className='pb-6'>
      <nav className="pt-6 pb-2 md:pt-10 md:pb-4 flex justify-center">
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <NavLink to="/" className={navLinkClass}>home</NavLink>
          </li>
          <li>
            <NavLink to="/games" className={navLinkClass}>games</NavLink>
          </li>
          <li>
            <NavLink to="/babylon-toolkit" className={navLinkClass}>babylon Toolkit</NavLink>
          </li>
          <li>
            <NavLink to="/buy-stash" className={navLinkClass}>buy stash</NavLink>
          </li>
        </ul>
      </nav>
      <div className='grid justify-items-center bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 rounded-xl p-2'>
        <img src="./images/title.png" alt="title" className='md:w-1/2 pt-4 md:pt-10 pb-2' />
        <div className='rounded-lg bg-red-500 px-3 py-1 font-bold'>
          Web3 Ecosystem
        </div>
      </div>
    </div>
  );
};

export default Header;
