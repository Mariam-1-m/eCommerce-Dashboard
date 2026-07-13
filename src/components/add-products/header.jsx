// Only mariam can edit this file
import React from 'react'
import  {ArrowLeft, Package2} from "lucide-react";
import {useNavigate} from 'react-router-dom';
function AddProductsHeader() {

  const navigate=useNavigate()

  return (
    <section className="w-[98%]    backdrop:blur-2xl border-slate-200 bg-white/90  shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60  h-107.5 md:h-87.5 flex p-5 m-auto  rounded-2xl  text-(--text-primary)">
    <div className="w-full">
    <button onClick={()=>{navigate('/products');
      
    }} className="bg-(--bg-primary) font-bold hover:bg-gray-200 dark:hover:bg-gray-800 text-sm flex px-4 py-2 border border-(--border-main) rounded-3xl  justify-center text-(--text-primary) items-center"><ArrowLeft className="text-sm mr-2" /> Back to products</button>

   <div className="flex gap-3 items-center my-4 p-3">
    <div className="p-4 size-16 flex items-center justify-center rounded-2xl bg-cyan-900 ">
      <Package2 className=" text-cyan-400 "/>
    </div>
    <div className="flex flex-col gap-1">
      <p className="text-cyan-400">Create Product</p>
      <h2 className="text-4xl font-bold">Lanch a polished product entry</h2>
    </div>
   </div>

   <p className="text-(--text-primary) ml-3">Add products with validation, image previews, multi-upload support, and smooth UX.</p>
    
    <div className="dark:bg-slate-950 bg-slate-50 flex  flex-col gap-1 py-3 px-4 my-5 rounded-2xl border dark:border-(--border-main) border-gray-300">
      <h4 className="text-cyan-400">Ready</h4>
      <p>Create, validate, and save with one click.</p>
    </div>



    </div>
    </section>
  )
}

export default AddProductsHeader