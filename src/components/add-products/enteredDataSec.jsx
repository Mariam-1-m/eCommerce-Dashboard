// Only Mazen can edit this file
import React, { useState } from "react";
import { ChevronDown, Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function EnteredDataSec({productImages, addProduct}) {
      const [loading, setLoading] = useState(false);
      const [tag, setTag] = useState("");
      const [tags, setTags] = useState([]);

const navigate = useNavigate();

      const handleClick = (e) => {
        e.preventDefault();
        if(tag.trim() === "") return
        if(tags.includes(tag.trim())) {
          setTag("")
          return
        }
        setTags((prev)=> [...prev, tag.trim()])
        setTag("")
      }

      const removeTags = (clickedTag) => {
        const filteredTags = tags.filter((tag)=> tag !== clickedTag)
        setTags(filteredTags)
      }


  const {register,handleSubmit} = useForm();

  const onSubmit = async (data) => {
     if(productImages.length === 0){
    toast.error("Please upload at least one image.");
    return;
  }
        try{
setLoading(true);
    const formData = new FormData()
    formData.append("name", data.name);
formData.append("shortDescription", data.shortDescription);
formData.append("description", data.description);
formData.append("price", data.price);
formData.append("discountPrice", data.discountPrice || "");
formData.append("stock", data.stock);
formData.append("sku", data.sku || "");
formData.append("category", data.category);
formData.append("subcategory", data.subcategory || "");
formData.append("brand", data.brand || "");
formData.append("featured", data.featured);
formData.append("isActive", data.isActive);

tags.forEach((tag, index)=> (
  formData.append(`tags[${index}]`, tag)
))

productImages.forEach((image) => {
  formData.append("images", image.file);
});
    await addProduct(formData)
     toast.success("Product created successfully.");
     navigate("/products")
        }catch(err){
        toast.error("Something went wrong");
        }finally{
       setLoading(false)
        }
}

 const onError = (errors) => {
  const firstError = Object.values(errors)[0];

  if(firstError){
    toast.error(firstError.message);
  }
}
  return (
    <form onSubmit={handleSubmit(onSubmit,onError)} className="max-w-3xl bg-white/90 dark:bg-slate-900/60 rounded-3xl p-6 mx-auto mt-2.5">
      <div>
        <p className="text-sm font-semibold">Product Name</p>
        <input
        {...register("name", {
          required: "Product name is required."
        })}
          type="text"
          className="pl-6 mt-3 dark:bg-slate-950 bg-slate-50 placeholder:text-slate-400 border dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5"
          placeholder="iPhone 16 Pro"
        />
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold">Short Description</p>
        <input
         {...register("shortDescription",{
 required:"Short description is required",
 minLength:{
   value:10,
   message:"Short description must be at least 10 characters"
 }
})}
          type="text"
          className="pl-6 mt-3 dark:bg-slate-950 bg-slate-50 placeholder:text-slate-400 border dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5"
          placeholder="Minimum 10 characters"
        />
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold">Description</p>
        <textarea
         {...register("description", {
 required:"Description is required",
 minLength:{
   value:20,
   message:"Description must be at least 20 characters"
 }
})}
          type="text"
          rows={6}
          className="pl-6 dark:bg-slate-950 bg-slate-50 outline-none mt-3 placeholder:text-slate-400 border dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5"
          placeholder="Minimum 20 characters"
        ></textarea>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-7">
        <div>
          <p className="text-sm font-semibold">Price</p>
          <input
            {...register("price", {
            required: "Price is required.",
            min: {
            value: 1,
            message: "Price must be greater than 0."
            }
            })}
            type="number"
            className="pl-6 mt-3 border dark:bg-slate-950 bg-slate-50 dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5"
          />
        </div>

        <div>
          <p className="text-sm font-semibold">Discount Price</p>
          <input
          {...register("discountPrice")}
            type="number"
            className="pl-6 mt-3 border dark:bg-slate-950 bg-slate-50 dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5"
          />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-7">
        <div>
          <p className="text-sm font-semibold">Stock</p>
          <input
           {...register("stock",{
 required:"Stock is required",
 min:{
   value:0,
   message:"Stock cannot be negative"
 }
})}
            type="number"
            className="pl-6 mt-3 border dark:bg-slate-950 bg-slate-50 dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5"
          />
        </div>

        <div>
          <p className="text-sm font-semibold">SKU</p>
          <input
           {...register("sku")}
            type="text"
            className="pl-6 mt-3 border dark:bg-slate-950 bg-slate-50 dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5"
          />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-7">
        <div>
          <p className="text-sm font-semibold">Category</p>
          <div className="mt-3 relative">
            <select
            {...register("category", {
            required: "Category is required."
            })}
            className="appearance-none pl-6 dark:bg-slate-950 bg-slate-50 border dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5 outline-none">
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
          <p className="text-sm font-semibold">Subcategory</p>
          <input
           {...register("subcategory")}
            type="text"
            className="pl-6 mt-3 dark:bg-slate-950 bg-slate-50 dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5"
          />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold">Brand</p>
        <input
           {...register("brand")}
          type="text"
          className="pl-6 mt-3 dark:bg-slate-950 bg-slate-50 border dark:border-gray-800 border-slate-200 rounded-xl w-full p-2.5"
        />
      </div>

      <div className="pl-6 mt-5 border dark:bg-slate-950 bg-slate-50 dark:border-gray-800 border-slate-200 rounded-4xl w-full p-4 h-36">
        <p className="text-sm font-semibold">Tags</p>

        <div className="flex gap-3 items-end">
          <input
            onChange={(e)=> setTag(e.target.value)}
            value={tag}
            type="text"
            className="pl-6 mt-2 dark:bg-slate-950 bg-white/90 placeholder:text-slate-400 border dark:border-gray-800 border-slate-200 rounded-xl w-full p-3"
            placeholder="Type a tag and press +"
          />
          <button onClick={handleClick} type="button" className="rounded-2xl dark:bg-gray-500 bg-gray-400 hover:bg-gray-400 flex items-center justify-center p-4">
            <Plus className="text-white"/>
          </button>
        </div>

        
          {tags.length === 0 ? (
             <p className="text-slate-400 mt-3 text-sm">
             Add one or more tags to organize the product.
           </p>
          ) : (
            <div>
            {tags.map((tag,index) => (
               <div onClick={() => removeTags(tag)} className="cursor-pointer inline-block px-2.5 mx-1 mt-2 py-0.5 rounded-full hover:bg-gray-500/50 text-white bg-gray-500 text-sm font-medium" key={index}> <div className="flex items-center gap-1">#{tag} <X size={15}/></div> </div>
            ) 
            )}
          </div>
          )}
      </div>

      <div className="flex items-center gap-5 mt-5">
        <div className="flex items-center gap-3 border dark:bg-slate-950 bg-slate-50 dark:border-gray-800 border-slate-200 rounded-2xl py-3.5 px-5">
          <input {...register("featured")} type="checkbox" className="accent-blue-300" />
          <p className="font-semibold">Featured</p>
        </div>

        <div className="flex items-center gap-3 border dark:bg-slate-950 bg-slate-50 dark:border-gray-800 border-slate-200 rounded-2xl py-3.5 px-5">
          <input {...register("isActive")} type="checkbox" defaultChecked className="accent-blue-300" />
          <p className="font-semibold">Active</p>
        </div>
      </div>







<div className="border-t dark:border-gray-800 border-slate-50 mt-4">
<div className="flex items-center gap-3 mt-5">
<button type="button" className="rounded-xl px-5 py-2.5 text-white text-sm font-semibold dark:bg-slate-800 bg-slate-200">Cancel</button>
<button type="submit" className={`rounded-xl text-white ${loading? "cursor-not-allowed opacity-50" : "cursor-pointer" } px-5 py-2.5 text-sm font-semibold bg-cyan-500 hover:bg-cyan-400`} disabled={loading}>
  {loading ? "Creating..." : "Create Product"}
</button>
</div>
</div>








    </form>
  );
}

export default EnteredDataSec;
