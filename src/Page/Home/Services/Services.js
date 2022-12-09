import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images//whitening.png'
import Service from './Service';


const Services = () => {
    const servicesData = [
        {
            id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.',
        },
        {
            id: 2,
            img: cavity,
            title: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.',
        },
        {
            id: 3,
            img: whitening,
            title: 'Teeth  whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.',
        },
    ]
    return (
        <div className='mt-20'>
            <div className='text-center my-10'>
                <h2 className='text-lg text-primary font-bold'>Our Services</h2>
                <h3 className='text-3xl text-white'>Services We Provide</h3>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service=> <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>  
        </div>
    );
};

export default Services;