import React, { useState } from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import videoBackground from '../assets/matrix.mp4';

const Skills = () => {

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
        <div name='skills' className='text-gray-300 w-full h-screen'>
            <div className='absolute  w-full h-full'>
                <video className='w-full h-full object-cover' autoPlay muted loop>
                    <source src={videoBackground} type='video/mp4' />
                </video>
            </div>
            {/* Container */}
            <div className='absolute mx-auto p-8 flex flex-col justify-center items-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4 hover:scale-150 duration-500'>Tech Journey: My Experience with Technologies</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div
                        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                        onClick={() => handleIconClick('HTML is a markup language for creating web pages.')}
                    >
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div
                        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                        onClick={() => handleIconClick('CSS is used for styling web pages and applications.')}
                    >
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div
                        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                        onClick={() => handleIconClick('JavaScript is a programming language for building interactive web elements.')}
                    >
                        <img className='w-20 mx-auto' src={Javascript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div
                        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                        onClick={() => handleIconClick('MongoDB is a flexible NoSQL database for managing unstructured data.')}
                    >
                        <img className='w-20 mx-auto' src={Mongo} alt="JavaScript icon" />
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div
                        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                        onClick={() => handleIconClick('Node.js is server-side JavaScript runtime.')}
                    >
                        <img className='w-20 mx-auto' src={Node} alt="JavaScript icon" />
                        <p className='my-4'>NodeJS</p>
                    </div>
                    <div
                        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                        onClick={() => handleIconClick('React is a JavaScript UI library.')}
                    >
                        <img className='w-20 mx-auto' src={ReactImg} alt="JavaScript icon" />
                        <p className='my-4'>React</p>
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
    )
}

export default Skills
