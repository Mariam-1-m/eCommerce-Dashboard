// Only Habiba-khalid can edit this file
import { Search,Boxes,Tag,SlidersHorizontal } from 'lucide-react'
import React from 'react'

function ProductsSearchForm() {
  return (
    <section className='flex flex-col items-center my-5 py-2 bg-slate-900/90 w-[92%] rounded-3xl overflow-hidden m-auto'>
      <div className='w-full h-20 p-2 flex justify-around items-center '>
        <div className='w-[70%] bg-slate-800 flex pl-6 border border-slate-600 focus:border-cyan-300 items-center justify-between gap-0 x py-1 h-13  rounded-2xl '>
          <Search className='text-gray-400' size={15}/>
        <input className='w-[98%]  py-1  px-3 h-13   ' placeholder="Search products... " type='text' />

        </div>
        <button className='px-5 py-3 flex hover:text-white text-gray-300 text-sm border border-gray-300 bg-gray-600 rounded-xl items-center justify-between gap-1'><SlidersHorizontal size={18}/>Filters</button>
        <button className='px-5 py-3 flex bg-blue-500 rounded-xl hover:bg-blue-400 text-sm items-center justify-between gap-1'><Search size={18}/>Search</button>

      </div>
     <div className=' w-full h-35 hidden  flex  mt-0 '>
      <hr className='w-[90%] border-gray-700 mt-3'/>

      <div className='flex flex-col  w-[50%] h-full justify-around gap-1  p-6 items-start '>
        <h4 className='flex justify-between items-center gap-1 text-sm text-gray-500'><Boxes size={16} /> Category</h4>
        <select className=' border border-gray-800 bg-slate-800 rounded-xl text-sm w-full h-10 my-1 px-3 py-1 outline-0'>
          <option value="">dcd</option>
          <option value="">cdcdc</option>
          <option value="">cdc</option>
          <option value="">ccc</option>
          <option value="">cdcdcd</option>
        </select>
      </div>

      <div className='flex flex-col  w-[50%] h-full justify-around items-start p-6 '>
      <h4 className='flex justify-between items-center gap-1 text-sm text-gray-500 ml-2'><Tag size={16} />SubCategory</h4>
     <input type='text' placeholder='e.g smartphones' className='border border-slate-600 ml-2 bg-slate-800 text-sm rounded-xl w-full h-10 my-1 p-3'/>
      </div>

     </div>
    </section>
  )
}

export default ProductsSearchForm