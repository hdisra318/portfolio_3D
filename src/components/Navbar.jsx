import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import {styles} from '../styles';
import { menu, close } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState("");

  const [desplegado, setDesplegado] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Israel Hernandez &nbsp; <span className='sm:block hidden'>| Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} 
            hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* For mobiles */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={desplegado? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setDesplegado(!desplegado)} />
          <div className={`${!desplegado ? 'hidden' : 'flex'} p-6 bg-primary absolute z-10 right-0
            mx-4 my-2 min-w-[140px] rounded-xl top-20`}>
              <ul className='list-none flex flex-col gap-4 items-start'>
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} 
                hover:text-white font-poppins text-[16px] font-medium cursor-pointer`} onClick={() => {
                    setActive(link.title);
                    setDesplegado(!desplegado);
                  }}>
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar