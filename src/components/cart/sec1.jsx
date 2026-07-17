// only abdullha can edit this file
import React from 'react'

function CartSec1() {
  return (
    <section className='w-[96%] h-auto hover:shadow-md shadow-slate-900/5   dark:shadow-cyan-400 border border-(--border-main) flex flex-col justify-between gap-2 m-auto p-7 rounded-4xl bg-white/90 dark:bg-slate-900/50 '>
      <h4 className='tracking-[0.25rem] text-cyan-400'>CARTS</h4>
      <h2 className='font-bold text-2xl'>Cart overview</h2>
      <p className='text-gray-500  dark:text-gray-300 text-sm'>All active carts returned from the API are rendered here with their latest item details.</p>
    </section>
  )
}

export default CartSec1