'use client'

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
    const [errors, setErrors] = useState({
        name: '',
        subject: '',
        message: '',
        email: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newErrors = {
            name: '',
            subject: '',
            message: '',
            email: ''
        };

        // Validate each field
        if (!formData.get('name')) {
            newErrors.name = 'Name is required';
        }
        if (!formData.get('subject')) {
            newErrors.subject = 'Subject is required';
        }
        if (!formData.get('message')) {
            newErrors.message = 'Message is required';
        }
        if (!formData.get('email')) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email') as string)) {
            newErrors.email = 'Please enter a valid email';
        }

        setErrors(newErrors);

        // If no errors, proceed with form submission
        if (!Object.values(newErrors).some(error => error)) {
            setIsSubmitting(true);
            try {
                const emailData = {
                    to: 'john.defalco321@gmail.com',
                    from: '', // TODO: Add email service sender address here
                    subject: formData.get('subject'),
                    text: `Name: ${formData.get('name')}\n\nMessage: ${formData.get('message')}\n\nEmail: ${formData.get('email')}`,
                };

                // TODO: Replace with email service API call
                // Example using fetch:
                // const response = await fetch('/api/send-email', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(emailData),
                // });

                // if (!response.ok) {
                //     throw new Error('Failed to send email');
                // }

                // Show success message
                setSuccessMessage('Message sent successfully!');
                
                // Clear the form
                e.currentTarget.reset();
            } catch (error) {
                setSuccessMessage('Failed to send message. Please try again.');
            } finally {
                setIsSubmitting(false);
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
            }
        }
    };

    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 max-w-6xl">
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl font-bold">Contact Me</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                        {/* Left Column - Contact Information */}
                        <div className="space-y-6">
                            <p className="text-lg">
                                I'm always looking to learn more, and I'm always looking to help. 
                                If you have any questions, please don't hesitate to reach out.
                            </p>

                            <p className="text-lg">
                                Additionally if you have any recommendations for my website, please let me know!
                                Feedback is always welcome!
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <FaEnvelope className="text-xl" />
                                    <a href="mailto:john.defalco321@gmail.com" className="hover:text-blue-600 transition-colors">
                                        john.defalco321@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaPhone className="text-xl" />
                                    <a href="tel:+2014210630" className="hover:text-blue-600 transition-colors">
                                        (201) 421-0630
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaLinkedin className="text-xl" />
                                    <a href="https://www.linkedin.com/in/john-s-defalco/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        LinkedIn
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaGithub className="text-xl" />
                                    <a href="https://github.com/jdefalco715" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Contact Form (Commented out for future implementation) */}
                        {/* <div className="p-6 rounded-lg shadow-md">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="bg-white text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="bg-white text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="introduction">Introduction</option>
                                        <option value="knowledge-recommendation">Knowledge Recommendation</option>
                                        <option value="website-feedback">Website Feedback</option>
                                    </select>
                                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="bg-white text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="bg-white text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md transition-colors ${
                                        isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                                    }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                {successMessage && (
                                    <p className={`text-sm text-center mt-2 ${
                                        successMessage.includes('Failed') ? 'text-red-600' : 'text-green-600'
                                    }`}>
                                        {successMessage}
                                    </p>
                                )}
                            </form>
                        </div> */}
                    </div>
                </motion.section>
            </main>
        </div>
    )
}