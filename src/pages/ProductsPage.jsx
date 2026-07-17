import React, { useState, useEffect } from "react";
import axios from "axios";
import { PackageSearch } from "lucide-react";
import ProductsHeader from "../components/products/header";
import ProductsStatsCard from "../components/products/statsCard";
import ProductsSearchForm from "../components/products/searchForm";
import ProductsCard from "../components/products/productsCard";
import QuickProductDataSec from "../components/products/quickProductDataSec";
import Loader from "../components/Loader";
import EditProductDataSec from "../components/products/EditProductDataSec";
import EditProductImgUploader from "./../components/products/EditProductImgUploader";
import QuickGallerySec from "../components/products/quickGallerySec";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isQuickEdit, setIsQuickEdit] = useState(true);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://e-commerce-api-3wara.vercel.app/products?page=1&limit=50",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchAllProducts();
  }, [products]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className=" ">
      {isQuickEdit && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-around bg-white/90 dark:bg-black/90 p-4">
          <div className="bg-white/90 dark:bg-[#0F172A] w-full max-w-5xl max-h-[90vh] overflow-y-auto  rounded-3xl flex flex-col md:flex-row gap-6 p-6 shadow-2xl">
            <div className="w-full md:w-2/5">
              <QuickGallerySec
                product={selectedProduct}
                onImagesChange={(updatedImages) => {
                  setSelectedProduct((prevProduct) => ({
                    ...prevProduct,
                    images: updatedImages,
                  }));
                }}
              />{" "}
            </div>
            <div className="w-full md:w-3/5">
              <QuickProductDataSec
                product={selectedProduct}
                onClose={() => setIsQuickEdit(false)}
                onUpdate={(updated) => {
                  setProducts((prev) =>
                    prev.map((p) => (p._id === updated._id ? updated : p)),
                  );
                  setFilteredProducts((prev) =>
                    prev.map((p) => (p._id === updated._id ? updated : p)),
                  );
                }}
              />
            </div>
          </div>
        </div>
      )}

      <ProductsHeader />
      <ProductsStatsCard />
      <ProductsSearchForm
        allProducts={products}
        setFilteredProducts={setFilteredProducts}
        setIsSearching={setIsSearching}
      />

      {isSearching ? (
        <Loader />
      ) : filteredProducts.length > 0 ? (
        <ProductsCard
          products={filteredProducts}
          setProducts={setProducts}
          setFilteredProducts={setFilteredProducts}
          onEdit={(product) => {
            setSelectedProduct(product);
            setIsQuickEdit(true);
          }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-64 border-2 border-slate-300 rounded-3xl m-5 text-gray-400">
          <PackageSearch size={48} className="mb-4 opacity-50" />
          <h3 className="text-xl font-bold text-gray-300">No products found</h3>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
