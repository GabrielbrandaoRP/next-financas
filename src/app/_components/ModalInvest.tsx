import React from 'react'
import ModalContent from './ModalContent';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalInvest: React.FC<ModalProps> = ({ isOpen, onClose, children }) => { 
  if (!isOpen) return null; 

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-zinc-100             bg-opacity-10 z-50'>
      <div className='bg-white p-6 rounded-2xl shadow-lg w-96 relative'>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-zinc-500 hover:text-zinc-900'
        >
          X
        </button>
        <ModalContent/>
        
      </div>
    </div>
  )

}
export default ModalInvest