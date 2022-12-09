import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div className='mx-5 mt-10'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <Treatment></Treatment>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <Contact></Contact>
        </div>
    );
};

export default Home;