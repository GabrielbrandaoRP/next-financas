import React from 'react'
import { invest } from '@/data/invest'


export default function ModalContent() {
  return (
    <div className='flex flex-col'>
      <div>
        <h1 className='text-zinc-800 font-bold text-xl'>
          {invest[0].type}
        </h1>
      </div>
    </div>
  )
}
