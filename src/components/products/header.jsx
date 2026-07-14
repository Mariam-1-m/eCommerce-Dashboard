// Only mayada can edit this file
import React from 'react'
import { Package, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductsHeader() {
  const navigate = useNavigate();
  
  return (
    <section className="mx-9 mt-9 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition-all duration-500 hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10">
           <Package size={38} className="text-cyan-400" />
         </div>

         <div>
           <p className="text-xs font-bold uppercase tracking-[8px] text-cyan-400">
              PRODUCT DASHBOARD
           </p>

           <h1 className="mt-2 text-4xl font-black tracking-tight">
              Products
           </h1>
         </div>
       </div>

       <button
         onClick={() => navigate("/products/add")}
          className="flex items-center justify-center gap-2 w-full lg:w-auto px-6 py-3 rounded-xl bg-cyan-500 text-white transition-all duration-300 hover:scale-105"> 
          <Plus size={20}/>
          <span>Add Product</span>
       </button>
     </div>
   </section>
  )
}

export default ProductsHeader