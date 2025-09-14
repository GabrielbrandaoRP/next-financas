'use client'
import ModalDeposito from "./_components/ModalDeposito";
import ModalSaque from "./_components/ModalSaque";
import { useState } from "react";
export default function Home() {
  const [isModalDepositoOpen, setIsModalDepositoOpen] = useState(false);
  const [isModalSaqueOpen, setIsModalSaqueOpen] = useState(false);
  return (
    <div className="bg-zinc-100 px-100 py-5 h-screen">
      <main className="flex gap-10 flex-col">
        
        <div>
          <h2 className="font-bold text-zinc-800 text-2xl">Seus saldo:</h2>  
        </div>
        <div className="border-2 border-lime-500 rounded-2xl h-15 flex items-center justify-evenly py-5" >
          <button onClick={() => setIsModalDepositoOpen(true)}
            className="bg-lime-400 rounded-md p-2 text-white w-[132px] hover:bg-lime-600">
            Fazer depósito
            
          </button>
          <ModalDeposito isOpen={isModalDepositoOpen} onClose={() => setIsModalDepositoOpen(false)} children={undefined}/>
          <button onClick={() => setIsModalSaqueOpen(true)}
            className="bg-sky-700 rounded-md p-2 text-white w-[132px] hover:bg-sky-800">
            Fazer Saque
          </button>
            <ModalSaque isOpen={isModalSaqueOpen} onClose={() => setIsModalSaqueOpen(false)} children={undefined}/>
        </div>
      </main>
    </div>
  );
}
