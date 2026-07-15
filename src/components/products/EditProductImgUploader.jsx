 

import { ArrowLeft, Package2,ImagePlus ,Astroid,X} from "lucide-react";
import React from "react";
import {useState, useRef} from "react";
import { toast } from "react-toastify";

function EditProductImgUploader({onImagesChange}) {
const fileInput=useRef(null);
const [images,setImages]=useState([]);

const handleFileUpload=(e)=>{
  
 const files=Array.from(e.target.files);

 if(images.length + files.length > 5){
 toast.error("Maximum 5 images allowed")
 return;
}
 const newImages=(files.map((file,index)=>({
  file,
  preview:URL.createObjectURL(file),
  num:images.length + index + 1
 })
))

  const updatedImages = [...images ,...newImages]
  setImages(updatedImages);
if(onImagesChange){
  onImagesChange(updatedImages)
}

console.log(updatedImages);
}

const removeImage=(index)=>{
   const filteredImages =images.filter((_,i)=>i!==index)
    URL.revokeObjectURL(images[index].preview);
      setImages(filteredImages);
    if(onImagesChange){
      onImagesChange(filteredImages)
    }
    return filteredImages;
}

  return (
    <section className="w-full md:w-[47%]   p-3  backdrop:blur-2xl border-slate-200 bg-white/90  shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 h-auto flex items-around justify-start rounded-3xl  mt-3">
     <div className=" m-auto   p-5 w-[98%] flex flex-col  justify-center ">

   <div className="flex  items-center gap-3  p-2 rounded-2xl ">

   <div className="size-14  flex items-center justify-center bg-cyan-100  rounded-2xl dark:bg-cyan-900/30">
    <ImagePlus className="text-cyan-400 dark:text-cyan-300 " />
   </div>

   <div className=" flex flex-col gap-1">
    <h2 className="font-bold text-xl">Gallery</h2>
    <p>Upload multiple images and preview instantly.</p>
   </div>


   </div>

   {    images.length>0 &&(
<div className="imagesContainer grid grid-cols-2 md:grid-cols-2 mt-5 gap-3">
  {images.map((img,index)=>(
<div key={index} className="relative w-38 h-40 group rounded-2xl overflow-hidden ">
  <img src={img.preview} alt="preview" className="h-full w-full object-cover rounded-xl"/>
  <button onClick={()=>removeImage(index)}  className="absolute  top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition">
    <X size={16}/>
  </button>
<div className="absolute   bottom-0 bg-gray-300 py-1 w-full text-center rounded-">
<p className="text-black ">Image {img.num}</p>
</div>
</div>
  ))}

</div>)

}

<input type="file" 
ref={fileInput}
onChange={handleFileUpload}
className="hidden"
multiple

accept="image/png,image/jpeg,image/webp"
/>

<button 
onClick={()=>fileInput.current.click()}
className=" dark:bg-slate-950 bg-cyan-50/40 border-dashed border-cyan-400 outline-dashed text-(--text-primary) shadow gap-2 rounded-2xl border  my-15 py-8 flex flex-col justify-around items-center p-5 rounded-5 w-[98%]">
<ImagePlus className="text-cyan-400"/>
<h3>Upload Image</h3>
<p>png, JPG, WEBP .multiple files supported </p>
</button>



<div className="dark:bg-slate-950 bg-slate-50 text-balck dark:text-cyan-100 shadow   border border-(--border-main) p-5 rounded-2xl">
  <h4 className="capitalize flex items-center gap-2"><Astroid size={18} className="" />senior  ui/ux</h4>
  <p>Optimized product creation experience with responsive designand smooth interactions. </p>
</div>



     </div>
    </section>
  );
}

export default EditProductImgUploader;
