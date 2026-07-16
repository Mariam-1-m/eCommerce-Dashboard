

import { Search, Boxes, Tag, SlidersHorizontal, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function ProductsSearchForm({ allProducts, setFilteredProducts, setIsSearching }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const uniqueCategories = [...new Set(allProducts.map(p => p.category))];
      setCategories(uniqueCategories);
    }
  }, [allProducts]);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      let filtered = allProducts;
      if (searchText) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
      }
      if (selectedCategory) {
        filtered = filtered.filter(p => p.category === selectedCategory);
      }
      if (subCategory) {
        filtered = filtered.filter(p => p.subcategory.toLowerCase().includes(subCategory.toLowerCase()));
      }
      setFilteredProducts(filtered);
      setIsSearching(false);
    }, 500);
  };

  const handleReset = () => {
    setSearchText('');
    setSelectedCategory('');
    setSubCategory('');
    setFilteredProducts(allProducts);
  };

  return (
    <section className='flex flex-col justify-center items-center my-5 py-2 transition-all duration-500 bg-white/90 dark:bg-slate-900/90 w-[92%] rounded-3xl overflow-hidden m-auto'>
      <div className='w-full h-auto m-auto p-5 flex flex-col md:flex-row justify-around md:items-center items-around gap-3'>
        <div className='md:w-[70%] w-full bg-slate-100 text-gray-600 dark:bg-slate-800 flex pl-6 border border-slate-600 focus-within:border-cyan-300 items-center justify-between gap-0 py-1 h-13 rounded-2xl'>
          <Search className='text-gray-400' size={15} />
          <input 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='w-full py-1 px-3 h-13 text-gray-600 bg-transparent outline-none dark:text-white' 
            placeholder="Search products..." 
            type='text' 
          />
          <button onClick={handleReset} className='text-gray-400 mr-3 hover:text-black dark:hover:text-white'>
            <X size={20} />
          </button>
        </div>

        <button onClick={() => setIsExpanded(!isExpanded)} className='px-5 py-3 flex dark:text-gray-300 text-sm border dark:border-gray-300 border-cyan-400 bg-cyan-100 dark:bg-gray-600 rounded-xl items-center gap-1'>
          <SlidersHorizontal size={18} />Filters
        </button>
        <button onClick={handleSearch} className='px-5 py-3 flex text-white bg-cyan-400 rounded-xl hover:bg-cyan-300 text-sm items-center gap-1'>
          <Search size={18} />Search
        </button>
      </div>

      <div className={`w-full transition-all duration-500 ease-in-out flex flex-col ${isExpanded ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 pointer-events-none'}`}>
        <hr className='w-[90%] border-gray-700 mt-3 m-auto'/>
        <div className='flex w-full px-6 py-4'>
          <div className='flex flex-col w-[50%] px-2'>
            <h4 className='flex items-center gap-1 text-sm text-gray-500'><Boxes size={16} /> Category</h4>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className='border border-gray-800 mt-4 dark:bg-slate-800 dark:text-white rounded-xl text-sm w-full h-10 my-1 px-3 outline-none'>
              <option value="">All Categories</option>
              {categories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className='flex flex-col w-[50%] px-2'>
            <h4 className='flex items-center gap-1 text-sm text-gray-500'><Tag size={16} /> SubCategory</h4>
            <input 
              type='text' 
              value={subCategory} 
              onChange={(e) => setSubCategory(e.target.value)} 
              placeholder='e.g audio' 
              className='border border-slate-600 mt-4 dark:bg-slate-800 dark:text-white text-sm rounded-xl w-full h-10 my-1 p-3 outline-none' 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSearchForm;