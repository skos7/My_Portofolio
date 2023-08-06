import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import videoBackground from '../assets/matrix.mp4';

const Contact = () => {

    const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;

    emailjs.init(userId);

    const formRef = useRef(null); // Create a ref for the form

    const copyToClipboard = (text) => {
        const dummyInput = document.createElement('input');
        dummyInput.value = text;
        document.body.appendChild(dummyInput);
        dummyInput.select();
        document.execCommand('copy');
        document.body.removeChild(dummyInput);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, e.target)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                toast.success('Email sent successfully!');
                resetForm();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                toast.error('Error sending email. Please try again later.');
            });
    };

    const resetForm = () => {
        if (formRef.current) {
            formRef.current.reset(); // Reset the form fields
        }
    };

    return (
        <div name="contact" className="w-full md:h-screen text-gray-300 h-screen">
            <div className="absolute w-full h-full">
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src={videoBackground} type="video/mp4" />
                </video>
            </div>
            <div className="min-h-screen flex justify-center items-center p-4">
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    action=""
                    className="absolute w-full max-w-md rounded-lg p-8 shadow-lg"
                    style={{ background: 'linear-gradient(to right, #003300 , #007f00)' }}
                >
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white-600 border-b-4 border-pink-600 mb-2">Get in Touch</h2>
                        <p className="text-white-500">
                            Don't hesitate to reach out. You can connect with me by completing the form below, or you're welcome to send an email at your convenience: <span onClick={() => copyToClipboard('sandi.7kos@gmail.com')} style={{ cursor: 'pointer', textDecoration: 'underline', color: 'gray' }}>sandi.7kos@gmail.com</span>.
                        </p>
                        <p className="text-gray-500">Click the email address to copy it!</p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                            Name
                        </label>
                        <input
                            className="bg-gray-700 text-gray-200 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                            Email
                        </label>
                        <input
                            className="bg-gray-700 text-gray-200 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            className="bg-gray-700 text-gray-200 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Let's Collaborate!
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
