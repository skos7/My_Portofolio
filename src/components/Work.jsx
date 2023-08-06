import React, { useState } from 'react';
import videoBackground from '../assets/matrix.mp4';
import Wheather from '../assets/wheather.jpg';
import Netflix from '../assets/netflix.jpg';
import Pizza from '../assets/pizza.jpg';
import Stocking from '../assets/stocking.jpg';
import Calculator from '../assets/calculator.webp'

const Work = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');

    const handleIconClick = (text) => {
        setModalText(text);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setModalText('');
        setIsModalOpen(false);
    };

    return (
        <div name='work' className='relative w-full text-gray-300 overflow-hidden'>
            <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay muted loop>
                <source src={videoBackground} type='video/mp4' />
            </video>
            <div className='relative w-full min-h-screen flex flex-col justify-center items-center py-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Work</p>
                <p className='py-4 hover:scale-150 duration-500'>See my recent work </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Repeat this block for each item */}
                    <div className='relative shadow-lg shadow-[#3d8948] group container rounded-md flex flex-col justify-center items-center content-div' style={{ backgroundImage: `url(${Netflix})` }}>
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Netflix MERN stack
                            </span>
                            <div className='pt-8 text-center'>
                                <a>
                                    <button
                                        onClick={() => handleIconClick('MERN Stack Netflix Project with React, Redux Toolkit, Nodejs, MongoDB, Express, Firebase and TMDB API.')}
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>About</button>
                                </a>
                                <a href="https://github.com/skos7/Netflix_MERN_stack/"
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='relative shadow-lg shadow-[#3d8948] group container rounded-md flex flex-col justify-center items-center content-div' style={{ backgroundImage: `url(${Wheather})` }}>
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather Application C#
                            </span>
                            <div className='pt-8 text-center'>
                                <a>
                                    <button
                                        onClick={() => handleIconClick('Weather Application in C# using Open Weather Map API.')}
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>About</button>
                                </a>
                                <a href="https://github.com/skos7/Csharp-Weather_Application/"
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='relative shadow-lg shadow-[#3d8948] group container rounded-md flex flex-col justify-center items-center content-div' style={{ backgroundImage: `url(${Pizza})` }}>
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Pizzeria MERN stack
                            </span>
                            <div className='pt-8 text-center'>
                                <a>
                                    <button
                                        onClick={() => handleIconClick('MERN Stack Pizzeria Project with React, Redux Toolkit, Nodejs, MongoDB, Express and Firebase.')}
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>About</button>
                                </a>
                                <a href="https://github.com/skos7/HTML_ReactJS-pizzeriaWebApp/"
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='relative shadow-lg shadow-[#3d8948] group container rounded-md flex flex-col justify-center items-center content-div' style={{ backgroundImage: `url(${Stocking})` }}>
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                WEB stocking python
                            </span>
                            <div className='pt-8 text-center'>
                                <a>
                                    <button
                                        onClick={() => handleIconClick('Python application where Retrieving stocking data by url')}
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>About</button>
                                </a>
                                <a href="https://github.com/skos7/Python-Crawling_the_WEB-stocking"
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='relative shadow-lg shadow-[#3d8948] group container rounded-md flex flex-col justify-center items-center content-div' style={{ backgroundImage: `url(${Calculator})` }}>
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Calculator
                            </span>
                            <div className='pt-8 text-center'>
                                <a>
                                    <button
                                        onClick={() => handleIconClick('Calculator application using React')}
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>About</button>
                                </a>
                                <a href="https://github.com/skos7/HTML_ReactJS-Calculator/"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
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
                </div>
            </div>
        </div>
    )
}

export default Work
