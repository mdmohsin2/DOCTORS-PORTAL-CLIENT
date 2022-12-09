import React from 'react';

const Service = ({ service }) => {
    const { img, description, title } = service;
    return (
        <div className="card shadow-xl bg-base-200 text-white border-double border-4 border-indigo-400 hover:border-indigo-500 ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}!</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;