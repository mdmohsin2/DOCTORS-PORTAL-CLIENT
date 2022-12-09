import React from 'react';
import bg from '../../../assets/images/bg.png';
import Button from '../../../Components/Button/Button';

const Contact = () => {
    return (
        <section className='mt-16'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-lg text-cyan-400 font-bold">Contact Us</h1>
                        <p className="py-6 text-2xl text-white">Stay connected with us</p>
                    </div>
                    <div className=" text-center flex-shrink-0 shadow-2xl">
                        <div className="">
                            <input type="email" placeholder="Email Address" className="input w-full border-solid border-2 border-cyan-600" />
                            <input type="text" placeholder="Subject" className="input w-full my-4  border-solid border-2 border-cyan-600" />
                            <textarea className="textarea textarea-primary w-full mb-6" placeholder="Message"rows={5} ></textarea>
                           <Button> <input type="submit" value="Submit Now" /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;