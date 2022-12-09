import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import Button from '../../../Components/Button/Button';

const Treatment = () => {
    return (
        <div className="hero bg-base-200 my-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="p-5 rounded-lg lg:w-1/2 shadow-2xl" alt='img' />
                <div className='p-5'>
                    <h1 className="text-4xl font-bold text-white">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;