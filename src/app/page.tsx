import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-zinc-100 px-100 py-5 h-screen">
      <main className="flex gap-10 flex-col">
        
        <div>
          <h2 className="font-bold text-zinc-800">Seus saldo:</h2>  
        </div>
        <div className="border-2 border-lime-500 rounded-2xl h-15 flex items-center justify-evenly py-5" >
          <button className="bg-lime-600 rounded-md p-2 text-white w-[132px]">
            Fazer depósito
          </button>
          <button className="bg-sky-700 rounded-md p-2 text-white w-[132px]">
            Fazer Saque
          </button>
        </div>
      </main>
    </div>
  );
}
