'use client'
import { useState } from 'react'
import ModalInvest from './ModalInvest';
interface CardProps {
  tipo: string;
  valor: string;
  cor: string; // ex: "bg-blue-500"
}

const CardInvest: React.FC<CardProps> = ({ tipo, valor, cor }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className='flex flex-col items-center border-1 border-lime-400 rounded-2xl w-[220px] h-[140px]'>
      <div className= {`rounded-t-2xl w-full px-2 ${cor}`}>
        <h1 className='font-bold text-white text-lg'>{tipo}</h1>
      </div>

      <div className='py-2 flex flex-col gap-1'>
        <h1 className='font-bold'>
          Valor investido: 
        </h1>
        <h1>
          R${valor}
        </h1>
        <div>
          <button onClick={() => setIsModalOpen(true)}
            className='bg-lime-400 w-full p-1 rounded-md text-white text-lg'>
            Ver detalhes
          </button>
          <ModalInvest isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} children={undefined}>

          </ModalInvest>
        </div>
      </div>
      
    </div>
  )
}
export default CardInvest
