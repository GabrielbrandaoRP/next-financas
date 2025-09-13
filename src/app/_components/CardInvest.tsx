'use client'
import { useState } from 'react'
import ModalInvest from './ModalInvest';

const CardInvest: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className='flex flex-col items-center border-1 border-lime-400 rounded-2xl w-[220px] h-[140px]'>
      <div className='bg-lime-400 rounded-t-2xl w-full px-2'>
          <h1 className='font-bold text-white text-xl'>CDB</h1>
      </div>

      <div className='py-2 flex flex-col gap-1'>
        <h1 className='font-bold'>
          Valor investido: 
        </h1>
        <h1>
          R$1000,00
        </h1>
        <div>
          <button onClick={() => setIsModalOpen(true)}
            className='bg-lime-400 w-full p-1 rounded-md'>
            Ver detalhes
          </button>
          <ModalInvest isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>

          </ModalInvest>
        </div>
      </div>
      
    </div>
  )
}
export default CardInvest
