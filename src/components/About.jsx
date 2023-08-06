import React, { useState } from 'react';
import videoBackground from '../assets/matrix.mp4';

const About = () => {
    const [rightTextHovered, setRightTextHovered] = useState(false);

    const handleLeftTextHover = () => {
        setRightTextHovered(true);
    };

    const handleLeftTextLeave = () => {
        setRightTextHovered(false);
    };

    return (
        <div name='about' className='relative w-full h-screen bg-[#0a192f] text-gray-300 '>
            <div className='absolute  w-full h-full'>
                <video className='w-full h-full object-cover' autoPlay muted loop>
                    <source src={videoBackground} type='video/mp4' />
                </video>
            </div>
            <div className='absolute w-full h-full flex flex-col justify-center items-center'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='sm:text-right font-bold inline border-b-4 border-pink-600 text-4xl'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div
                        className={`${rightTextHovered ? 'bg-white text-black' : ''} sm:text-right text-4xl font-bold rounded-lg transition-all duration-300 p-2`}
                        style={{ backgroundColor: rightTextHovered ? 'rgba(255, 255, 255, 0.8)' : 'transparent' }}
                        onMouseEnter={handleLeftTextHover}
                        onMouseLeave={handleLeftTextLeave}
                    >
                        <p>
                            Hello there, I'm Sandi Kos. It's a pleasure to make your acquaintance. Feel free to explore and take a tour around.
                        </p>
                    </div>
                    <div className='bg-white bg-opacity-80 p-3 rounded-lg font-serif font-bold'>
                        <p className='text-justify text-black'>
                            As a Computer Science graduate with a love for React programming, I find joy in crafting meaningful projects while
                            continuously learning and growing as a developer. Beyond coding, you'll often find me indulging in my other passions:
                            – exploring the world of literature through avid reading, immersing myself in the beauty of nature with hiking and
                            trekking adventures, and staying active through various sports.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
