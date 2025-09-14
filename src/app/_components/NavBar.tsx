import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4  rounded-2xl bg-zinc-50">
        <h1 className="text-lime-500 font-bold text-3xl">
          <Link href={"/"}>
              Bem-vindo a sua conta!
          </Link>
        </h1>
      
        <ul className='flex gap-5'>
          <li className='hover:bg-lime-400 hover:rounded-3xl hover:text-white p-1 px-2'>
            <Link href="/"  className=" text-xl">
              Inicio
            </Link>
          </li>
          <li className='hover:bg-lime-400 hover:rounded-3xl hover:text-white p-1 px-2'>
            <Link href="/ajuda"  className=" text-xl">
              Ajuda
            </Link>
          </li>
          <li className='hover:bg-lime-400 hover:rounded-3xl hover:text-white p-1 px-2'>
            <Link href="/dashboard"  className=" text-xl">
              Investimentos
            </Link>
          </li>
          <li className='hover:bg-lime-400 hover:rounded-3xl hover:text-white p-1 px-2'>
            <Link href="/extrato"  className=" text-xl">
              Ver extrato
            </Link>
          </li>
        </ul>
            
        
        </nav>
  )
}
