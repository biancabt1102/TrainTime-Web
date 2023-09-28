"use client"

import React, { useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import DropMenuHamburguer from '@/components/DropMenuHamburguer';
import InfoExercicios from '@/components/InfoExercicios';

export default function DataRow({ exercicio }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleRowClick = () => { //Verifica se foi clicado (Colocado o evento no icone ChevronDownIcon)
        setIsExpanded(!isExpanded);
    };

    const handleDropMenuClick = (e) => {
        e.stopPropagation(); // Impede a propagação do evento de clique para o DataRow
    };

    

    return (
        <>
            <div id="data-row" className='flex items-center justify-between bg-green-700 p-4 mx-4 mt-4 rounded'>
                <div className='flex gap-2'>
                    <span className='text-emerald-100'>{exercicio.nomeDoExercicio}</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <ChevronDownIcon 
                        className={`h-10 w-10 text-green-950 hover:text-yellow-400 cursor-pointer ${isExpanded ? 'text-yellow-400' : ''}`} 
                        onClick={handleRowClick}/>
                </div>

            </div>
                {isExpanded && (
                    <div className="flex flex-col items-center p-4 mx-4 rounded-b" style={{
                        backgroundImage: `url('/image_exercicios.png')`, // Caminho para a imagem no diretório 'public'
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}>
                        <div className=' flex items-center justify-center w-full ' >
                            <div className='ms-auto w-6/12' >
                                <span className='content-center text-emerald-100' >{exercicio.diaDaSemanaId}</span>    
                            </div>
                            <div>
                                <div onClick={handleDropMenuClick} className=''>
                                    <DropMenuHamburguer idExercicio={exercicio.idExercicio}/>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full gap-10 ps-3'>
                            <InfoExercicios titulo="Série" valor={exercicio.qtdSeries} />
                            <InfoExercicios titulo="Carga (Kg)" valor={exercicio.cargaDoExercicio} />
                        </div>
                        <div className='flex w-full gap-10 ps-3'>
                            <InfoExercicios titulo="Repetição" valor={exercicio.qtdRepeticoes} />
                            <InfoExercicios titulo="Intervalo (segundos)" valor={exercicio.intervaloDoExercicio} />
                        </div>
                    </div>
                )}
        </>
    );
}
