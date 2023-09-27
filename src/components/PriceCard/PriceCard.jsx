import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-300 mt-4 rounded-md p-4'>
            <h3 className='text-center'>
                <span className='text-purple-800 text-4xl font-extrabold'>{price.membershipType}</span>
                <span className='text-2xl text-white'>/Mon</span>
            </h3>
            <h5 className='text-purple-500 text-2xl text-center'>{price.price}</h5>
            <p>Features: </p>
            {price.features.map((feature, idx) => <Feature key={idx} feature={feature}/>)}
        </div>
    );
};

export default PriceCard;