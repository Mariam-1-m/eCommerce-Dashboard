import { useEffect, useState } from "react";
import { ShoppingBag, Star, Tag } from "lucide-react";
import { getProduct } from "../../services/productsApi";
import Loader from "../loader";
import NotFoundPage from "../../pages/404";
import { useParams } from "react-router-dom";

function ProductsDataSec() {
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
  }, []);

  if (isLoading && !product) return <Loader />;

  if (!isLoading && !product) return <NotFoundPage />;

  const cardClass =
    "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 backdrop-blur-2xl shadow-xl shadow-slate-900/5 p-5";

  return (
    <section className="space-y-5">
      <div className={cardClass}>
        <p className="uppercase text-sm text-cyan-300">overview</p>
        <h3 className=" my-3 text-3xl font-bold">{product.name}</h3>
        <span className="">{product.description}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={cardClass}>
          <p className="uppercase text-slate-500 dark:text-slate-400 text-xs mb-2">
            price
          </p>
          <h4 className="text-xl font-bold ">${product.price}</h4>
        </div>
        <div className={cardClass}>
          <p className="uppercase text-slate-500 dark:text-slate-400 text-xs mb-2">
            discount
          </p>
          <h4 className="text-xl font-bold ">${product.discountPrice}</h4>
        </div>
        <div className={cardClass}>
          <p className="uppercase text-slate-500 dark:text-slate-400 text-xs mb-2">
            stock
          </p>
          <h4 className="text-xl font-bold ">{product.stock}</h4>
        </div>
        <div className={cardClass}>
          <p className="uppercase text-slate-500 dark:text-slate-400 text-xs mb-2">
            sku
          </p>
          <h4 className="text-xl font-bold ">{product.sku}</h4>
        </div>
      </div>
      {product.tags.length > 0 && (
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400 text-xl">
            <Tag className="h-5 w-5 text-cyan-300" />
            <span>Tags</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="px-5 py-2  rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className={cardClass}>
        <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400 text-xl">
          <ShoppingBag className="h-5 w-5 text-cyan-300" />
          <span>Category Info</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="px-5 py-2  rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm">
            {product.category}
          </span>
          <span className="px-5 py-2  rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm">
            {product.subcategory}
          </span>
          <span className="px-5 py-2  rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm">
            {product.brand}
          </span>
        </div>
      </div>
      <div className={cardClass}>
        <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400 text-xl">
          <Star className="h-5 w-5 text-cyan-300" />
          <span>Highlights</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="">{product.shortDescription}</span>
        </div>
      </div>
    </section>
  );
}

export default ProductsDataSec;
