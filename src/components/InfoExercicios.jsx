// InfoExercicios.jsx

import React from 'react';

function InfoExercicios({ titulo, valor }) {
  return (
    <div className='flex flex-col'>
      <h2>{titulo}</h2>
      <span className='bg-gray-600 w-40 h-9 py-2 px-2 rounded'>{valor}</span>
    </div>
  );
}

export default InfoExercicios;
