import Link from 'next/link'
import React from 'react'
import CardInvest from '../_components/CardInvest'

export default function Dashboard() {
  return (
    <div className='bg-zinc-100 h-screen flex flex-col items-center gap-5 py-5'>
      <h1 className='font-bold text-2xl text-zinc-800'>Meus investimentos:</h1>

      <div className='grid grid-cols-4 grid-rows-2 gap-3'>
          <CardInvest/>
          <CardInvest/> 
          <CardInvest/>
          <CardInvest/>
          <CardInvest/>
          <CardInvest/>
          <CardInvest/>
          <CardInvest/>
          <CardInvest/>
      </div>
    </div>
  )
}
