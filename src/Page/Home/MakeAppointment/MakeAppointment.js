import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import Button from '../../../Components/Button/Button';

const MakeAppointment = () => {
    return (
        <section className='mt-28' style={{background: `url(${appointment})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img src={doctor} alt='img' className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='p-4'>
                        <h2 className='text-lg text-cyan-300'>Appointment</h2>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">PIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>TREATMENT</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;