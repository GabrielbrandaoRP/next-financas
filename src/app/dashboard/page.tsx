import Link from 'next/link'
import React from 'react'
import CardInvest from '../_components/CardInvest'

export default function Dashboard() {
  return (
    <div className='bg-zinc-200 h-screen flex flex-col items-center gap-5 py-5'>
      <h1 className='font-bold text-2xl text-zinc-800'>Meus investimentos:</h1>

      <div className='grid grid-cols-4 grid-rows-2 gap-3'>
        <CardInvest
          tipo="CDB"
          valor="1.200,00"
          cor='bg-orange-400'
        />
        <CardInvest
          tipo="Tesouro Direto"
          valor="200,00"
          cor='bg-zinc-800'
        />
        <CardInvest
          tipo="Poupança"
          valor="100,00"
          cor='bg-yellow-600'
        />
        <CardInvest
          tipo="Trading"
          valor="12000,00"
          cor='bg-green-500'
        />
        
          
      </div>
    </div>
  )
}
