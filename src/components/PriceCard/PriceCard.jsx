import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-300 mt-4 rounded-md p-4 flex flex-col'>
            <h3 className='text-center'>
                <span className='text-purple-800 text-4xl font-extrabold'>{price.membershipType}</span>
                <span className='text-2xl text-white'>/Mon</span>
            </h3>
            <h5 className='text-purple-500 text-2xl text-center'>{price.price}</h5>
            <p>Features: </p>
            <div className="my-5" >
                {price.features.map((feature, idx) => <Feature key={idx} feature={feature} />)}
            </div>
            <button className='w-full bg-green-500 hover:bg-green-700 py-2 rounded-md text-white mt-auto '>Buy now</button>
        </div>
    );
};

export default PriceCard;