// Only habiba-hesham can edit this file
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import QuickGallerySec from "./QuickGallerySec";
import api from "../../lib/api";

function QuickProductDataSec() {
   
  const { id } = useParams();

  
  const [product, setProduct] = useState({
    productName: "",
    shortDesc: "",
    description: "",
    price: "",
    stock: "",
    category: "electronics",
    brand: "",
    discountPrice: "",
    sku: "",
    subcategory: "",
    tags: "",
    isFeatured: false,
    isActive: false,   
    images: [],      
  });

  
  useEffect(() => {
    api.get(`/products/${id}`)
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data.tags)) {
          data.tags = data.tags.join(", ");
        }
        setProduct(data);
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    api.patch(`/products/update/${id}`, product)
      .then(() => {
        alert("Product saved successfully!");
      })
      .catch((err) => alert("Error saving product: " + err.message));
  };

  return (
    <div className="bg-[#0F172A] mx-auto max-w-4xl p-5 text-white">
      {/* Section 1 */}
      <div className="container1 flex flex-col gap-4 mb-8">
        <label htmlFor="productName">Product name</label>
        <input
          type="text"
          name="productName"
          id="productName"
          value={product.productName || ""}
          onChange={handleChange}
          className="bg-slate-950 border-gray-800 rounded-md p-2 outline-none border"
        />

        <label htmlFor="shortDesc">Short Description</label>
        <input
          type="text"
          name="shortDesc"
          id="shortDesc"
          value={product.shortDesc || ""}
          onChange={handleChange}
          className="bg-slate-950 border-gray-800 rounded-md p-2 outline-none border"
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={product.description || ""}
          onChange={handleChange}
          className="bg-slate-950 border-gray-800 rounded-md p-2 h-24 outline-none border mb-5"
        ></textarea>
      </div>

      {/* Section 2 */}
      <div className="section2 grid grid-cols-2 gap-8 mb-8">
        {/* Container 2  */}
        <div className="container2 flex flex-col gap-4">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={product.price || ""}
            onChange={handleChange}
            className="bg-slate-950 w-full p-2 border border-gray-800 rounded-lg outline-none"
          />

          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={product.stock || ""}
            onChange={handleChange}
            className="bg-slate-950 w-full p-2 border border-gray-800 rounded-lg outline-none"
          />

          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={product.category || "electronics"}
            onChange={handleChange}
            className="bg-slate-950 border border-gray-800 rounded-lg w-full p-2 text-white outline-none"
          >
            <option value="electronics">electronics</option>
            <option value="phones">phones</option>
            <option value="fashion">fashion</option>
            <option value="home">home</option>
            <option value="beauty">beauty</option>
            <option value="sports">sports</option>
          </select>

          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={product.brand || ""}
            onChange={handleChange}
            className="bg-slate-950 w-full p-2 border border-gray-800 rounded-lg outline-none"
          />
        </div>

        {/* Container3  */}
        <div className="container3 flex flex-col gap-4">
          <label htmlFor="discountPrice">Discount price</label>
          <input
            type="number"
            name="discountPrice"
            id="discountPrice"
            value={product.discountPrice || ""}
            onChange={handleChange}
            className="bg-slate-950 w-full p-2 border border-gray-800 rounded-lg outline-none"
          />

          <label htmlFor="sku">SKU</label>
          <input
            type="text"
            name="sku"
            id="sku"
            value={product.sku || ""}
            onChange={handleChange}
            className="bg-slate-950 w-full p-2 border border-gray-800 rounded-lg outline-none"
          />

          <label htmlFor="subcategory">Subcategory</label>
          <input
            type="text"
            name="subcategory"
            id="subcategory"
            value={product.subcategory || ""}
            onChange={handleChange}
            className="bg-slate-950 w-full p-2 border border-gray-800 rounded-lg outline-none"
          />

          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={product.tags || ""}
            onChange={handleChange}
            className="bg-slate-950 w-full p-2 border border-gray-800 rounded-lg outline-none"
          />
        </div>
      </div>

      {/*images*/}
      <QuickGallerySec 
         images={product.images} 
         setImages={(newImages) => setProduct({ ...product, images: newImages })}
      />

      {/* Checkboxes */}
      <div className="flex gap-4 mt-8">
       
        <label className="flex items-center gap-2 rounded-xl px-5 py-2.5 bg-slate-800 hover:bg-slate-700 transition-colors text-white cursor-pointer">
          <input
            type="checkbox"
            name="isFeatured"
            checked={product.isFeatured}
            onChange={handleChange}
            className="w-4 h-4 cursor-pointer"
          />
          Featured
        </label>

        <label className="flex items-center gap-2 rounded-xl px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors cursor-pointer">
          <input
            type="checkbox"
            name="isActive"
            checked={product.isActive}
            onChange={handleChange}
            className="w-4 h-4 cursor-pointer"
          />
          Active
        </label>
      </div>

      <div className="border-t border-gray-800 mt-4"></div>

      {/* Buttons */}
      <div className="flex gap-4 justify-end mt-5">
        <button className="rounded-xl px-5 py-2.5 bg-slate-800 hover:bg-slate-700 transition-colors">
          Cancel
        </button>
       
        <button 
          onClick={handleSave} 
          className="rounded-xl px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors"
        >
          Save product
        </button>
      </div>
    </div>
  );
}

export default QuickProductDataSec;