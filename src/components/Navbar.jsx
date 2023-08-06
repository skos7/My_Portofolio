import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/sk-logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '250px' }} />
      </div>

      {/* Nav menu */}
      <ul className='hidden md:flex'>
        <li className='py-6 text-3xl'> <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}> Home </Link></li>
        <li className='py-6 text-3xl'> <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}> About </Link></li>
        <li className='py-6 text-3xl'> <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500}> Skills </Link></li>
        <li className='py-6 text-3xl'> <Link activeClass="active" to="work" spy={true} smooth={true} offset={-80} duration={500}> Work </Link></li>
        <li className='py-6 text-3xl'> <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500}> Contact </Link></li>
      </ul>

      <div onClick={handleMobileNavClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Nav menu */}
      {mobileNavOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-white p-4 rounded-lg shadow-md" style={{ background: 'linear-gradient(to right, #003300 , #007f00)' }}>
            <ul className="flex flex-col items-center">
              {/* Same navigation links as in the mobile nav */}
              <li className='py-4 text-4xl'> <Link onClick={closeMobileNav} activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}> Home </Link></li>
              <li className='py-4 text-4xl'> <Link onClick={closeMobileNav} activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}> About </Link></li>
              <li className='py-4 text-4xl'> <Link onClick={closeMobileNav} activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500}> Skills </Link></li>
              <li className='py-4 text-4xl'> <Link onClick={closeMobileNav} activeClass="active" to="work" spy={true} smooth={true} offset={-80} duration={500}> Work </Link></li>
              <li className='py-4 text-4xl'> <Link onClick={closeMobileNav} activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500}> Contact </Link></li>
            </ul>
          </div>
        </div>
      )}

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/sandi-kos-58443a249/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/skos7/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:sandi.7kos@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-gradient-to-r from-green-900 to-green-600 p-4 rounded-2xl'>
            <p className='text-lg'>{modalText}</p>
            <button className='mt-2 px-4 py-2 bg-green-500 text-white rounded-2xl' onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div >
  );
};

export default Navbar;
