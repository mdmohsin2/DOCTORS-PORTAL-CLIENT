import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailabaleAppointment from '../AvailabaleAppointment/AvailabaleAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailabaleAppointment
                selectedDate={selectedDate}
            ></AvailabaleAppointment>
        </div>
    );
};

export default Appointment;