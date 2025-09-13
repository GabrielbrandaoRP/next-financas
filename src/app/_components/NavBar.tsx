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
          <li className=''>
            <Link href="/ajuda"  className="hover:cursor-wait text-xl">
              Ajuda
            </Link>
          </li>
          <li>
            <Link href="/dashboard"  className="hover:cursor-wait text-xl">
              Ver extrato
            </Link>
          </li>
        </ul>
            
        
        </nav>
  )
}
