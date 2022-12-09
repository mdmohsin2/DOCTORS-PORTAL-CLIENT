import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatments, setTreatments, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext)
    // console.log(treatments);
    const { name: treatmentName, slots, price } = treatments;
    const date = format(selectedDate, 'PP')

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatments(null)
                    toast.success('booking confirm')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })

    }

    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} className="input w-full" disabled />
                        <select name='slot' className="select select-success w-full">
                            {
                                slots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered input-success w-full " required />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered input-success w-full " required />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-success  w-full " required />
                        <input type="submit" className='w-full btn bg-gray-600' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;