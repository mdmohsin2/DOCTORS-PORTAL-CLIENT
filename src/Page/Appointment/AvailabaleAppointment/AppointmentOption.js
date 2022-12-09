import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatments }) => {
    const { name, price, slots } = appointmentOption;
    return (
        <div className="card bg-purple-900 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title mx-auto text-cyan-400 font-bold">{name}</h2>
                <p className='text-white'>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p className='text-white'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p className='text-white'>Price ${price}</p>
                <div className="card-actions justify-center mt-2">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatments(appointmentOption)}
                        htmlFor="book-modal"
                        className="btn btn-primary btn-outline font-bold text-white"
                    >BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;