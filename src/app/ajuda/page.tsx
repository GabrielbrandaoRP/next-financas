import React from 'react'

export default function Ajuda() {
  return (
    <main className='bg-zinc-100 h-screen flex flex-col items-start px-20 py-5 gap-4'>
      <h1 className='font-bold text-3xl'>Ajuda</h1>
      
      <div className='flex flex-col gap-5 border-2 border-zinc-400 rounded-2xl px-5 py-8'>
        <div>
          <h1 className='font-bold text-2xl'>
            1. Passo 1
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque dignissimos blanditiis tenetur aliquam debitis ut numquam in! Maiores ut rem inventore unde possimus porro magni facilis reprehenderit, a molestias!</p>
          <hr />
        </div>
        <div>
          <h1 className='font-bold text-2xl'>
            2. Passo 2
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque dignissimos blanditiis tenetur aliquam debitis ut numquam in! Maiores ut rem inventore unde possimus porro magni facilis reprehenderit, a molestias!</p>
          <hr />
        </div>
        <div>
          <h1 className='font-bold text-2xl'>
            3. Passo 3
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque dignissimos blanditiis tenetur aliquam debitis ut numquam in! Maiores ut rem inventore unde possimus porro magni facilis reprehenderit, a molestias!</p>
          <hr />
        </div>
      </div>
    </main>
  )
}
