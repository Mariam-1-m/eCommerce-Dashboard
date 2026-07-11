// Only Mazen can edit this file
import React from "react";
import { ChevronDown, Plus } from "lucide-react";

function EnteredDataSec() {
  return (
    <div className="max-w-3xl bg-[#0F172A] rounded-3xl p-6 mx-auto mt-2.5">
      <div>
        <p className="text-sm text-white">Product Name</p>
        <input
          type="text"
          className="pl-6 mt-3 bg-slate-950 placeholder:text-slate-400 border border-gray-800 rounded-xl w-full p-2.5"
          placeholder="iPhone 16 Pro"
        />
      </div>

      <div className="mt-5">
        <p className="text-sm text-white">Short Description</p>
        <input
          type="text"
          className="pl-6 mt-3 bg-slate-950 placeholder:text-slate-400 border border-gray-800 rounded-xl w-full p-2.5"
          placeholder="Minimum 10 characters"
        />
      </div>

      <div className="mt-5">
        <p className="text-sm text-white">Description</p>
        <textarea
          type="text"
          rows={6}
          className="pl-6 bg-slate-950 outline-none mt-3 placeholder:text-slate-400 border border-gray-800 rounded-xl w-full p-2.5"
          placeholder="Minimum 20 characters"
        ></textarea>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-7">
        <div>
          <p className="text-sm text-white">Price</p>
          <input
            type="number"
            className="pl-6 mt-3 border bg-slate-950 border-gray-800 rounded-xl w-full p-2.5"
          />
        </div>

        <div>
          <p className="text-sm text-white">Discount Price</p>
          <input
            type="number"
            className="pl-6 mt-3 border bg-slate-950 border-gray-800 rounded-xl w-full p-2.5"
          />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-7">
        <div>
          <p className="text-sm text-white">Stock</p>
          <input
            type="number"
            className="pl-6 mt-3 border bg-slate-950 border-gray-800 rounded-xl w-full p-2.5"
          />
        </div>

        <div>
          <p className="text-sm text-white">SKU</p>
          <input
            type="text"
            className="pl-6 mt-3 border bg-slate-950 border-gray-800 rounded-xl w-full p-2.5"
          />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-7">
        <div>
          <p className="text-sm text-white">Category</p>
          <div className="mt-3 relative">
            <select className="appearance-none pl-6 bg-slate-950 border border-gray-800 rounded-xl w-full p-2.5 outline-none">
              <option value="electronics">electronics</option>
              <option value="phones">phones</option>
              <option value="fashion">fashion</option>
              <option value="home">home</option>
              <option value="beauty">beauty</option>
              <option value="sports">sports</option>
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              size={18}
            />
          </div>
        </div>

        <div>
          <p className="text-sm text-white">Subcategory</p>
          <input
            type="text"
            className="pl-6 mt-3 bg-slate-950 border border-gray-800 rounded-xl w-full p-2.5"
          />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm text-white">Brand</p>
        <input
          type="text"
          className="pl-6 mt-3 bg-slate-950 border border-gray-800 rounded-xl w-full p-2.5"
        />
      </div>

      <div className="pl-6 mt-5 border bg-slate-950 border-gray-800 rounded-4xl w-full p-4 h-36">
        <p className="text-sm text-white">Tags</p>

        <div className="flex gap-3 items-end">
          <input
            type="text"
            className="pl-6 mt-2 bg-slate-950 placeholder:text-slate-400 border border-gray-800 rounded-xl w-full p-3"
            placeholder="Type a tag and press +"
          />
          <button className="rounded-2xl bg-gray-500 hover:bg-gray-400 flex items-center justify-center p-4">
            <Plus />
          </button>
        </div>

        <p className="text-slate-400 mt-3 text-sm">
          Add one or more tags to organize the product.
        </p>
      </div>

      <div className="flex items-center gap-5 mt-5">
        <div className="flex items-center gap-3 border bg-slate-950 border-gray-800 rounded-2xl py-3.5 px-5">
          <input type="checkbox" className="accent-blue-300" />
          <p>Featured</p>
        </div>

        <div className="flex items-center gap-3 border bg-slate-950 border-gray-800 rounded-2xl py-3.5 px-5">
          <input type="checkbox" defaultChecked className="accent-blue-300" />
          <p>Active</p>
        </div>
      </div>










<div className="border-t border-gray-800 mt-4">
<div className="flex items-center gap-3 mt-5">
<button className="rounded-xl px-5 py-2.5 text-sm font-semibold bg-slate-800">Cancel</button>
<button className="rounded-xl px-5 py-2.5 text-sm font-semibold bg-cyan-500 hover:bg-cyan-400">Create Product</button>
</div>
</div>









    </div>
  );
}

export default EnteredDataSec;
