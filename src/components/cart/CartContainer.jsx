import axios from "axios";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

function CartsContainer(){
const [cartsData,setCartsData]=useState(null);
const [loading,setLoading]=useState(true);
const token=localStorage.getItem("token")

useEffect(()=>{
    const fetchCart=async ()=>{
    try{
      const response =await axios.get("https://e-commerce-api-3wara.vercel.app/carts", {
        headers: {
         
          Authorization: `Bearer ${token}` 
        }
      });
      console.log(response.data);
      setCartsData(response.data);
    }catch (error){
      console.error("Error fetching Cart:", error.response?.data || error.message);
    }finally{
        setLoading(false);
    }
    }
    fetchCart();
},[token])


if(loading){
    return(
        <div className="flex justify-center items-center  p-12 italic ">Loading carts..</div>
    )
}

if(!cartsData || !cartsData.items || cartsData.items.length === 0){
    return(
      <div className="w-220 h-auto text-gray-600 dark:text-gray-300   shadow shadow-slate-900/5  m-8 p-10 border-slate-200 bg-white/90 border  dark:border-(--border-main) dark:bg-slate-900/50 rounded-3xl flex justify-center items-center ">
      No carts returned from APIS
    </div>
    );
}

    return(
       
     <div className="max-w-4xl mx-auto p-6">
       <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-2 space-y-4">
          {cartsData.items.map((item) => (
            <div key={item._id} className="flex items-center bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-blue-600">${item.price}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-medium">Qty: {item.quantity}</span>
                <span className="font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        
        <div className="bg-gray-50 p-6 rounded-xl h-fit">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span>${cartsData.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-3">
            <span>Total</span>
            <span>${cartsData.total.toFixed(2)}</span>
          </div>
          <button className="w-full mt-6 px-3 bg-black text-white py-3 rounded-lg">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartsContainer;





