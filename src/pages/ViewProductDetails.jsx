import { useEffect, useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import NotFoundPage from "./404";
import Loader from "../components/Loader";
import ProductsGallerySec from "../components/products/gallerySec";
import ProductsDataSec from "../components/products/dataSec";
import { getProduct } from "../services/productsApi";

function ViewProductDetails() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const data = await getProduct(productId);

        if (data.success) setProduct(data.product);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  if (isLoading && !product) return <Loader />;

  if (!isLoading && !product) return <NotFoundPage />;

  return (
    <div className="p-4 lg:p-8 space-y-5">
      <GoBack product={product} />
      <div className="grid gap-6  lg:grid-cols-2">
        <ProductsGallerySec product={product} />
        <ProductsDataSec product={product} />
      </div>
    </div>
  );
}

export default ViewProductDetails;

function GoBack({ product }) {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-r from-white to-slate-100/90 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-cyan-950/40 p-6 pb-8">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200 dark:bg-white/5" />

      <button
        onClick={() => navigate(-1)}
        className="group mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back
      </button>

      <div className="flex items-start gap-4">
        <Eye size={20} className="text-cyan-500 dark:text-cyan-300 mt-1" />

        <div>
          <h1 className="mb-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {product.name}
          </h1>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Product details overview
          </p>
        </div>
      </div>
    </div>
  );
}
