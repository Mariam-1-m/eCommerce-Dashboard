import { ChevronDown, Search } from 'lucide-react'
import React from 'react'

function OrdersHeader() {
    return (
        <>
         

<div className='flex items-center justify-between mb-5'>
<div>
<p className='text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]'>Admin · Management</p>
<p className='text-3xl font-bold dark:text-white pt-0.5'>Orders</p>
</div>
<div className='rounded-xl border border-slate-100 bg-white px-4 py-2.5 dark:border-slate-800 dark:bg-slate-900 flex items-center gap-2'>
<span className='text-2xl font-bold dark:text-white'>33</span>
<span className='text-slate-400 text-xs'>total orders</span>
</div>
</div>



<div className='flex items-center gap-3'>
<div className='relative min-w-45 flex-1'>
<span className="absolute -translate-y-1/2 top-1/2 left-3">
<Search className="text-gray-400" size={18} />
</span>
<input 
type="search"
placeholder='Search ID, customer...'
className='w-full rounded-lg border border-slate-200 h-9 bg-white pl-9 pr-3 text-sm text-slate-800 placeholder-slate-400 transition focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
/>
</div>

               <div className="relative">
                <select
                className="appearance-none pl-4 dark:bg-slate-950 bg-slate-50 border dark:border-gray-800 border-slate-200 rounded-xl w-full py-2 px-8 outline-none">
                <option value="electronics">All statuses</option>
                <option value="phones">Pending</option>
                <option value="fashion">Confirmed</option>
                <option value="home">Processing</option>
                <option value="beauty">Shipped</option>
                <option value="sports">Delivered</option>
                <option value="sports">Cancelled</option>
                <option value="sports">Returned</option>
                </select>
                <ChevronDown
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                size={17}
                />
               </div>








                <div className="relative">
                <select
                className="appearance-none pl-4 dark:bg-slate-950 bg-slate-50 border dark:border-gray-800 border-slate-200 rounded-xl w-full py-2 px-8 outline-none">
                <option value="electronics">All payments</option>
                <option value="phones">Pending</option>
                <option value="fashion">Paid</option>
                <option value="home">Failed</option>
                </select>
                <ChevronDown
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                size={17}
                />
               </div>







                <div className="relative">
                <select
                className="appearance-none pl-4 dark:bg-slate-950 bg-slate-50 border dark:border-gray-800 border-slate-200 rounded-xl w-full py-2 px-8 outline-none">
                <option value="electronics">All methods</option>
                <option value="phones">Cash</option>
                <option value="fashion">Stripe</option>
                </select>
                <ChevronDown
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                size={17}
                />
               </div>
  



</div>


        </>
    )
}

export default OrdersHeader