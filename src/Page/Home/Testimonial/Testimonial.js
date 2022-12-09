import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviewsData = [
        {
            _id: 1,
            name: 'Winson Herry',
            city: 'California',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 1,
            name: 'Winson Herry',
            img: people2,
            city: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 1,
            name: 'Winson Herry',
            img: people3,
            city: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-lg font-bold text-cyan-300'>Testimonial</h3>
                    <h2 className='text-3xl text-white'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className='w-20 lg:w-44' alt="img" />
                </div>
            </div>
            <div className='mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewsData.map(reviews=> <Review key={reviews._id} reviews={reviews}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;