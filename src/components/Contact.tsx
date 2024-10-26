"use client"
import React, { useState, useRef, useEffect } from 'react'
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// const host = "http://localhost:4001";
// const host = "https://portfolio-backend-9xkh.onrender.com";


const Contact = () => {
    const formInitialDetails = {
        name: "",
        email: "",
        message: "",
    };
    const [client, setClient] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send Message")
    const handleChange = (name: string, value: string) => {
        setClient({
            ...client,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // console.log(host);
        e.preventDefault();
        console.log('Handling form submission...', client);
        setButtonText("Sending...")
        if (!client.name || !client.email || !client.message) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch(`/api/client`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: client.name,
                    email: client.email,
                    message: client.message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                const submissionCount = parseInt(localStorage.getItem('submissionCount') || '0');
                if (submissionCount >= 5) {
                    toast.error('Submission limit reached. You can submit up to 5 times.');
                    return;
                }
                localStorage.setItem('submissionCount', (submissionCount + 1).toString());
                setClient(formInitialDetails);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred while submitting the form');
        }
        setButtonText("Send Message")
    };

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = '40px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [client.message]);

    return (
        <section id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
            <p className='font-titlefont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
                04. what&#39;s Next?
            </p>
            <h2 className='font-titlefont text-5xl font-semibold'>Get In Touch</h2>
            <p className='max-w-[600px] text-center text-textDark '>
                I&#39;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&#39;ll try my best to get back to you!
            </p>
            <motion.form
                onSubmit={handleSubmit}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex-1 w-full mdl:w-[700px] border border-textGreen rounded-2xl flex flex-col gap-y-6  p-6 items-center '>
                <input
                    className='bg-transparent border-b border-textDark py-3 outline-none w-full placeholder-white focus:border-textGreen transition-all'
                    minLength={3}
                    placeholder='Your Name'
                    type='text'
                    id='name'
                    value={client.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                />
                <input
                    className='bg-transparent border-b border-textDark py-3 outline-none w-full placeholder-white focus:border-textGreen transition-all'
                    placeholder='Your Email'
                    type='email'
                    id='email'
                    value={client.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                />
                <textarea
                    ref={textareaRef}
                    className='scrollbar-hide min-h-12 bg-transparent border-b border-textDark py-4 resize-none mb-4 outline-none w-full placeholder-white focus:border-textGreen transition-all'
                    id='message'
                    onChange={(e) => {
                        handleChange('message', e.target.value);
                        adjustTextareaHeight();
                    }}
                    required
                    placeholder='Your Message'
                    value={client.message}
                    rows={1}
                />
                <button type='submit' className='border items-center justify-center border-textDark hover:bg-hoverColor rounded-full px-8 py-2 text-accent font-semibold duration-300'>{buttonText}</button>
            </motion.form>
        </section>
    )
}

export default Contact
