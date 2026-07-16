

import React, { useState, useEffect } from "react";
import api from "../../lib/api";

function QuickProductDataSec({ product, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    productName: "", shortDesc: "", description: "", price: "", 
    discountPrice: "", stock: "", sku: "", category: "", 
    subcategory: "", brand: "", tags: "", isFeatured: false, isActive: false,
  });
console.log(product)
  useEffect(() => {
    if (product) {
      setFormData({
        productName: product.name || "",
        shortDesc: product.shortDescription || "",
        description: product.description || "",
        price: product.price || "",
        discountPrice: product.discountPrice || "",
        stock: product.stock || "",
        sku: product.sku || "",
        category: product.category || "",
        subcategory: product.subcategory || "",
        brand: product.brand || "",
        tags: Array.isArray(product.tags) ? product.tags.join(", ") : product.tags || "",
        isFeatured: product.featured || false,
        isActive: product.isActive || false,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };
const handleSave = async () => {
  try {
    const token = localStorage.getItem("token");

   
    const validImages = (product.images || []).filter(
      (img) => img.url && !img.url.startsWith("blob:")
    );

    const payload = {
      name: formData.productName,
      shortDescription: formData.shortDesc,
      description: formData.description,
      price: parseFloat(formData.price) || 0,
      discountPrice: parseFloat(formData.discountPrice) || 0,
      stock: parseInt(formData.stock) || 0,
      sku: formData.sku,
      category: formData.category,
      subcategory: formData.subcategory,
      brand: formData.brand,
      tags: typeof formData.tags === 'string' 
        ? formData.tags.split(',').map(t => t.trim()) 
        : formData.tags,
      isActive: formData.isActive,
      featured: formData.isFeatured,
      images: validImages, 
    };

    console.log("SENDING CLEAN PAYLOAD:", payload);

    
    const res = await api.patch(`/products/update/${product._id}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const updatedProduct = res.data.product || res.data;
    
    alert("Updated Successfully!");
    onUpdate(updatedProduct); 
    onClose();
  } catch (err) {
    console.error("Backend Error Details:", err.response?.data);
    alert("Save failed: " + (err.response?.data?.message || "Check console for error"));
  }
};
  return (
    <div className="w-full text-white p-6 bg-slate-50 rounded-2xl pb-10  space-y-4">
      <h2 className="text-xl text-black dark:text-white font-bold">Edit Product</h2>
      
      <input name="productName" value={formData.productName} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="Product Name" />
      <input name="shortDesc" value={formData.shortDesc} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="Short Description" />
      <textarea name="description" value={formData.description} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700 h-20" placeholder="Description" />
      
      <div className="grid grid-cols-2 gap-4">
        <input name="price" type="number" value={formData.price} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="Price" />
        <input name="discountPrice" type="number" value={formData.discountPrice} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="Discount Price" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="stock" type="number" value={formData.stock} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="Stock" />
        <input name="sku" value={formData.sku} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="SKU" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="category" value={formData.category} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="Category" />
        <input name="subcategory" value={formData.subcategory} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="Subcategory" />
      </div>

      <input name="brand" value={formData.brand} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="Brand" />
      <input name="tags" value={formData.tags} onChange={handleChange} className="w-full text-gray-700  bg-slate-100 dark:bg-slate-950 p-2 rounded border border-gray-700" placeholder="Tags (comma separated)" />

      <div className="flex gap-6 pt-2">
        <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
          <input name="isActive" type="checkbox" checked={formData.isActive} onChange={handleChange} /> Active
        </label>
        <label className="flex text-black dark:text-whiteitems-center gap-2 cursor-pointer">
          <input name="isFeatured" type="checkbox" checked={formData.isFeatured} onChange={handleChange}  /> Featured
        </label>
      </div>

      <div className="flex gap-4 justify-end pt-8">
        <button onClick={onClose} className="px-6 py-2  bg-slate-800 rounded-lg hover:bg-slate-700">Cancel</button>
        <button onClick={handleSave} className="px-6 py-2  bg-cyan-600 rounded-lg font-bold hover:bg-cyan-500">Save Changes</button>
      </div>
    </div>
  );
}
export default QuickProductDataSec;