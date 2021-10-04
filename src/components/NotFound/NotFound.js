import React from 'react';
import notfound from '../../404.svg';

const NotFound = () => {
    return (
        <div className="container text-center my-5">
            <img src={notfound} alt="" className="w-75"/>
            <h3 className="my-5">Page is not found. Please return to home</h3>
        </div>
    );
};

export default NotFound;