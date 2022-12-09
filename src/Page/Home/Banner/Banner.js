import React from 'react';
import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import Button from '../../../Components/Button/Button';

const Banner = () => {
    return (
        <div>
            <div className="hero bg" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="p-5 rounded-lg lg:w-1/2 shadow-2xl" alt='img' />
                    <div className='p-5'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>GET STARTED</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;