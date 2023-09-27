import React from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function DataRow({ exercicio }) {
    return (
        <div id="data-row" className='flex items-center justify-between bg-green-700 p-4 m-4 rounded'>
            <div className='flex gap-2'>
                <span className='text-emerald-100'>{exercicio.nomeDoExercicio}</span>
            </div>
            <div className='flex gap-2 items-center'>
                <ChevronDownIcon className='h-10 w-10 text-green-950 hover:text-yellow-400 cursor-pointer' />
            </div>
        </div>
    );
}
