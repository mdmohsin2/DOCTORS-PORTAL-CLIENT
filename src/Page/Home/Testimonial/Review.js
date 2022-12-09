import React from 'react';

const Review = ({ reviews }) => {
    const { name, img, city, review } = reviews;
    return (
        <div className="card shadow-xl border-double border-4 border-indigo-400 hover:border-indigo-500">
            <div className="card-body">
                <p>{review}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar">
                        <div className="w-12 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='img' />
                        </div>
                    </div>
                    <div>
                        <h2>{name}</h2>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;