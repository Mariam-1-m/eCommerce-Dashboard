
import axios from 'axios'
import {ChevronLeft,ChevronRight,Eye,Pencil,FilePenLine,Trash2} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure the CSS is imported
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../index.css'

function ProductsCard() {

const [products,setProducts]=useState([])
const token =localStorage.getItem("token");


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


const handleDelete = async (productId) => {
  const token = localStorage.getItem("token");
  console.log("Token being sent:", token); 

  const isConfirmed = window.confirm("Are you sure you want to delete this product?");
  
  if (isConfirmed) {
    try {
      await axios.delete(`https://e-commerce-api-3wara.vercel.app/products/${productId}`, {
        headers: { 
          
          Authorization: `Bearer ${token}` 
        }
      });
      
      setProducts(prev => prev.filter(p => p._id !== productId));
      toast.success("Product deleted successfully!");
    } catch (error) {
     
      console.error("Full error response:", error.response?.data);
      toast.error(error.response?.data?.message || "Unauthorized: Check your login.");
    }
  }
};

  return (
    <div className=' grid cols-1 md:grid-cols-2 gap-6 justify-between  w-auto  h-auto m-5'>
      { products.map((product) => (
         <div key={product._id || product.id} className="w-105 m-auto dark:bg-slate-900/90  group hover:shadow-xl  h-[520px] rounded-3xl overflow-hidden relative">
    <div className='w-full h-[270px] top-0 flex justify-between overflow-hidden items-center'>
      
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation={{
    prevEl: '.custom-prev-button',
    nextEl: '.custom-next-button',
  }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  className="w-full h-full"
>
 
  <button className='custom-prev-button absolute left-3 top-1/2 -translate-y-1/2 z-20 group-hover:flex justify-center items-center hidden bg-gray-50 size-8 dark:bg-slate-900/90 rounded-full'>
    <ChevronLeft size={20} />
  </button>

  {product.images.map((img, idx) => (
    <SwiperSlide key={idx}>
      <div className='group-hover:scale-110 transition  duration-300'>
        <img src={img.url} className='w-full h-full bg-cover object-cover g' />
      </div>
    </SwiperSlide>
  ))}


  <button className='custom-next-button absolute right-3 top-1/2 -translate-y-1/2 z-20 group-hover:flex justify-center items-center hidden bg-gray-50 size-8 dark:bg-slate-900/90 rounded-full'>
    <ChevronRight size={20} />
  </button>
</Swiper>

    </div>

    <div className='w-full h-65 dark:bg-slate-900/90 bg-white/70 p-5 absolute bottom-0 flex flex-col  justify-between'>
<h3 className='text-xl  font-bold'>{product.name}</h3>
<p className='text-xs font-bold uppercase my-2  text-gray-400'>{product.category} · {product.subcategory} · {product.brand}</p>
<p className='text-xs font-bold text-gray-400 '>{product.shortDescription}</p>
  <h2 className='inline text-3xl my-1 font-extrabold'>${product.price} <span className='text-sm'>{(product.price !==0 &&product.discountPrice!==0)?"−"+Math.ceil((product.price/product.discountPrice))+"% off":""}</span></h2>

<div className='flex my-2 '>
  
  {product.tags && product.tags.map((tag, i) => (
    <p key={i} className="px-2 py-1 mx-1 dark:bg-slate-800/60 dark:border-slate  dark:text-gray-300 bg-gray-200 rounded-2xl text-xs">#{tag}</p>
  ))}

  </div>

  <hr className='border-t-1 border-slate-600 my-3 '/>
<div className='flex justify-around pt-3'>
  <Link to={`/products/view/${product._id}`} className='px-3 py-2  dark:bg-slate-800/60 dark:border-slate-800 text-xs bg-slate-50 border hover:text-cyan-500 hover:bg-cyan-50  hover:border-cyan-500 border-slate-300 rounded-xl flex justify-center items-center text-center'> <Eye size={16} className='mr-1'/> view</Link>
  <Link to={`/products/edit/${product._id}`}  className='px-3 py-2  dark:bg-slate-800/60 dark:border-slate-800 text-xs bg-slate-50 border hover:text-violet-500 hover:bg-violet-50  hover:border-violet-500 border-slate-300  rounded-xl flex justify-center items-center text-center'><Pencil size={16} className='mr-1' /> Edit</Link>
  <Link  className='px-3 py-2  dark:bg-slate-800/60 dark:border-slate-800 text-xs  bg-slate-50 border hover:text-amber-500 hover:bg-amber-50  hover:border-amber-500 border-slate-300 rounded-xl flex justify-center items-center text-center'><FilePenLine size={16} className='mr-1'  /> QuickEdit</Link>
  <Link onClick={()=>handleDelete(product._id)} className='px-3 py-2  dark:bg-slate-800/60 dark:border-slate-800 text-xs bg-red-50 border hover:text-red-500 hover:bg-red-100 hover:border-red-500 border-red-400 text-red-400 rounded-xl flex justify-center items-center text-center'><Trash2 size={16} className='mr-1' /> Delete</Link>
</div>
    </div>
    </div >
      ))}


{toast.message && (
  <div className={`fixed top-5 right-5 z-[200] px-6 py-3 rounded-xl shadow-lg text-white font-medium transition-all ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
    {toast.message}
  </div>
)}
    </div>
  )
}

export default ProductsCard