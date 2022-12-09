import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailabaleAppointment = ({ selectedDate }) => {
    // const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatments, setTreatments] = useState(null)
    const date = format(selectedDate, 'PP')
    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    
    // isLoading setup here from loading page 
    if(isLoading){
        return <Loading></Loading>
    }




    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOption(data))
    // }, [])


    return (
        <div className='mt-24'>
            <p className='text-lg text-cyan-400 text-center mt-20'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatments={setTreatments}
                    ></AppointmentOption>)
                }
                {
                    treatments &&
                    <BookingModal
                        treatments={treatments}
                        selectedDate={selectedDate}
                        setTreatments={setTreatments}
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailabaleAppointment;