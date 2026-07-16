// Only mayada can edit this file
// import React from "react";
import React, { useEffect, useState } from "react";
import {
  Package,
  Star,
  CircleCheckBig,
  CircleX,
} from "lucide-react";

function ProductsStatsCard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://e-commerce-api-3wara.vercel.app/products?page=1&limit=10"
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const totalProducts = products.length;
  const featuredProducts = products.filter(
    (product) => product.featured
  ).length;
  const inStockProducts = products.filter(
    (product) => product.stock > 0
  ).length;
  const outOfStockProducts = products.filter(
    (product) => product.stock === 0
  ).length;

  return (
    <section className="mx-9 mt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        
        <div className="rounded-2xl border border-[var(--border-main)]  bg-white/90 dark:bg-slate-900/60 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[var(--text)]"> Total Products</p>
              <h2 className="mt-3 text-3xl font-bold">{totalProducts} </h2>
              <p className="mt-3 text-sm font-medium text-green-400"> +12% from last month </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
              <Package size={28} className="text-cyan-400" />
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl border border-[var(--border-main)] bg-white/90 dark:bg-slate-900/60 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[var(--text)]">  Featured</p>
              <h2 className="mt-3 text-3xl font-bold">{featuredProducts} </h2>
              <p className="mt-3 text-sm font-medium text-yellow-400">  Featured items  </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/10">
              <Star size={28} className="text-yellow-400" />
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl border border-[var(--border-main)] bg-white/90 dark:bg-slate-900/60  p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[var(--text)]">  In Stock  </p>
              <h2 className="mt-3 text-3xl font-bold">  {inStockProducts}  </h2>
              <p className="mt-3 text-sm font-medium text-green-400">  Available now  </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10">
              <CircleCheckBig size={28} className="text-green-400" />
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl border border-[var(--border-main)] bg-white/90 dark:bg-slate-900/60 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[var(--text)]">  Out of Stock  </p>
              <h2 className="mt-3 text-3xl font-bold">  {outOfStockProducts} </h2>
              <p className="mt-3 text-sm font-medium text-red-400">  Need restocking  </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10">
              <CircleX size={28} className="text-red-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsStatsCard;