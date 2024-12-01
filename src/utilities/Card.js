import React from 'react';

const Card = ({ image, name, price }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 w-64">
      <img
        src={image}
        alt={name}
        className="rounded-t-lg w-full h-40 object-cover"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm mt-1">Price</p>
        <p className="text-blue-400 font-bold text-xl">${price}</p>
      </div>
    </div>
  );
};

export default Card;
