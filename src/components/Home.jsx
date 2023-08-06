import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import videoBackground from '../assets/matrix.mp4';

const Home = () => {

  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };


  return (
    <div name='home' className='relative w-full h-screen bg-[#0a192f]'>
  {/* Video Background */}
  <div className='absolute w-full h-full'>
    <video className='w-full h-full object-cover' autoPlay muted loop>
      <source src={videoBackground} type='video/mp4' />
    </video>
  </div>
  {/* Container */}
  <div className='absolute inset-0 flex flex-col items-center justify-center mx-auto px-8'>
    <p className='text-pink-500 font' onClick={toggleText}><strong> Hi, my name is </strong></p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
      Sandi Kos
    </h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#e9eaef]'>
      I'm a Frontend Developer
    </h2>
    <p className='text-2xl sm:text-3xl py-20 max-w-[1000px] text-[#d0d8df]'>
      and I take pride in being a Frontend Developer.
    </p>
    {/* Popup Dialog */}
    {showMore && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white text-black text-xl opacity-90 p-8 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl rounded-lg">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ textAlign: 'justify' }}>
              <strong>
                With a curious mind and a passion for innovation, I'm constantly pushing the boundaries of web design.
                My expertise lies in translating complex concepts into elegant and user-friendly interfaces using HTML, CSS, and JavaScript.
                As a frontend developer, I thrive
                on collaborating with designers and backend engineers to create seamless
                and responsive web experiences that captivate users.
                Through my dedication to optimizing performance and accessibility,
                I ensure that the websites I develop are both visually stunning and inclusive for all users.
              </strong>
            </span>
            <div className="flex justify-end">
              <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg" onClick={toggleText}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )}

    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' onClick={toggleText}>
      <span>{showMore ? 'See Less' : 'See More'}</span>
      <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3 ' />
      </span>
    </button>
  </div>
</div>

  );
};

export default Home;
