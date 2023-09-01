import React from 'react';

export default function SelectText({ label, id, options,...props }) {
    return (
        <div className='flex flex-col gap-1 my-2'>
            <label htmlFor={id} className='text-white'>{label}</label>
            <select id={id} {...props} className='bg-green-500 px-2 py-2 rounded outline-none focus: ring-1 focus:ring-black text-white'>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
