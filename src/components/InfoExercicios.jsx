// InfoExercicios.jsx

import React from 'react';

function InfoExercicios({ titulo, valor }) {
  return (
    <div className='flex flex-col'>
      <h2 className='text-emerald-100'>{titulo}</h2>
      <span className='bg-gray-600 w-40 h-9 py-2 px-2 rounded text-emerald-100'>{valor}</span>
    </div>
  );
}

export default InfoExercicios;
