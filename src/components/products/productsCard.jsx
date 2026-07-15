// Only Habiba-khalid can edit this file
import axios from 'axios'
import {ChevronLeft,ChevronRight,Eye,Pencil,FilePenLine,Trash2} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import React from 'react'


function ProductsCard() {

const [products,setProducts]=useState([])
const token =localStorage.getItem("TOKEN");

useEffect(()=>{
const fetchProducts =async()=>{
  try{
   const productsData=await axios.get("https://e-commerce-api-3wara.vercel.app/products?page=1&limit=10",{
    headers:{Authorization :`Bearer ${token}`}
   })
   console.log(productsData.data);
   setProducts(productsData.data.products);
  }catch(error){
   console.error("Error fetching products:",error.message);
  }
}
fetchProducts();
},[token])





  return (
    <div className=' grid cols-1 md:grid-cols-2 gap-5 justify-between    w-auto  h-auto m-5'>
      { products.map((product) => (
         <div key={product._id || product.id} className="w-100 m-auto bg-blue-200 group hover:shadow-xl  h-[500px] rounded-3xl overflow-hidden relative">
    <div className='w-full h-[250px] top-0 flex justify-between overflow-hidden items-center'>
      <button  className='absolute left-3 z-2 group-hover:flex justify-center items-center hidden bg-gray-50 size-8  rounded-full'><ChevronLeft size={20} /></button>
      <img src={product.images[0].url} className='group-hover:scale-110 duration-300 transition bg-cover w-full h-full '/>
      <button className='absolute right-3 z-2  group-hover:flex justify-center items-center hidden bg-gray-50 size-8  rounded-full'> <ChevronRight size={20} /></button>
    </div>

    <div className='w-full h-[250px] bg-white/90 p-5 absolute bottom-0 flex flex-col  justify-between'>
<h3 className='text-xl  font-bold'>{product.name}</h3>
<p>{product.category} · {product.subcategory} · {product.Brand}</p>
<p className='text-sm'>{product.shortDescription}</p>
  <h2 className='inline text-3xl font-extrabold'>${product.price} <span className='text-sm'>−{Math.ceil((product.price/product.discountPrice))}% off</span></h2>

<div className='flex my-1 '>
  
  {product.tags && product.tags.map((tag, i) => (
    <p key={i} className="px-2 py-1 mx-1 bg-gray-100 rounded-md text-sm">{tag}</p>
  ))}

  </div>

  <hr/>
<div className='flex justify-around'>
  <Link to={`/products/view/${product._id}`} className='px-3 py-2 font-bold text-xs bg-slate-50 border hover:text-cyan-500 hover:bg-cyan-50  hover:border-cyan-500 border-slate-300 rounded-xl flex justify-center items-center text-center'> <Eye size={16} className='mr-1'/> view</Link>
  <Link to={`/products/edit/${product._id}`}  className='px-3 py-2 font-bold text-xs bg-slate-50 border hover:text-violet-500 hover:bg-violet-50  hover:border-violet-500 border-slate-300  rounded-xl flex justify-center items-center text-center'><Pencil size={16} className='mr-1' /> Edit</Link>
  <Link t className='px-3 py-2 font-bold text-xs bg-slate-50 border hover:text-amber-500 hover:bg-amber-50  hover:border-amber-500 border-slate-300 rounded-xl flex justify-center items-center text-center'><FilePenLine size={16} className='mr-1'  /> QuickEdit</Link>
  <Link  className='px-3 py-2 font-bold text-xs bg-red-50 border hover:text-red-500 hover:bg-red-100 hover:border-red-500 border-red-400 text-red-400 rounded-xl flex justify-center items-center text-center'><Trash2 size={16} className='mr-1' /> Delete</Link>
</div>
    </div>
    </div >
      ))}
    </div>
  )
}

export default ProductsCard