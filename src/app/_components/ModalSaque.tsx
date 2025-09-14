
import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const ModalSaque: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      
      <div
        className="absolute inset-0"
        onClick={onClose}
      >
        
        <div className="w-full h-full bg-black/40 backdrop-blur-sm -z-10" />

       
      </div>

      
      <div
        className="relative z-10 bg-white rounded-2xl shadow-lg w-96 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <div>
          <button className="bg-sky-700 w-full p-1 rounded-md text-white text-lg">
            Sacar
          </button>
        </div>
      </div>
    </div>
  )
}
export default ModalSaque
