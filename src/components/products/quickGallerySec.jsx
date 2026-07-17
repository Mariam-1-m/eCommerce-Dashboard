

import React from "react";
import { Trash2, Upload } from "lucide-react";

function QuickGallerySec({ product, onImagesChange }) {
  const handleRemove = (indexToRemove) => {
    const newImages = product.images.filter((_, index) => index !== indexToRemove);
    onImagesChange(newImages);
  };

const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const localUrl = URL.createObjectURL(file);
  const newImageObj = {
 public_id: "temp_" + Date.now(),

    url: localUrl
  };
  console.log(product.images)
  onImagesChange([...(product.images || []), newImageObj]);

console.log(product.images)

};

  return (
    <section className="bg-slate-50 dark:bg-slate-900 p-6 mt-5 rounded-2xl h-full border border-gray-800">
      <h2 className="text-xl font-bold text-black dark:text-white mb-4">Product Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {product.images?.map((img, index) => (
          <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-gray-700">
            <img src={img.url} className="w-full h-full object-cover" alt="Product" />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 p-1.5 bg-red-600 rounded-lg text-white"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-xl aspect-square cursor-pointer hover:border-cyan-500">
          <Upload className="w-8 h-8 text-gray-500" />
          <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
        </label>
      </div>
    </section>
  );
}
export default QuickGallerySec;
