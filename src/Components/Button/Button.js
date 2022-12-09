import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white">{children}</button>
        </div>
    );
};

export default Button;