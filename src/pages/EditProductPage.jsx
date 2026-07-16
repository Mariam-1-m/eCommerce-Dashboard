import EditProductsHeader from "../components/products/EditProductsHeader";
import EditProductImgUploader from "../components/products/EditProductImgUploader";
import EditProductDataSec from "../components/products/EditProductDataSec";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditProductPage() {
  const [productImages, setProductImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const token = localStorage.getItem("token");

  const updateProduct = async (formData) => {
    const { data } = await axios.patch(
      `https://e-commerce-api-3wara.vercel.app/products/update/${productId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return data;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `https://e-commerce-api-3wara.vercel.app/products/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setProduct(data.product);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, [productId]);

  return (
    <div className="p-6">
      <EditProductsHeader />
      <div className="flex">
        <EditProductImgUploader
          product={product}
          onImagesChange={setProductImages}
           onDeletedImagesChange={setDeletedImages}
        />
        <EditProductDataSec
          product={product}
          updateProduct={updateProduct}
          productImages={productImages}
           deletedImages={deletedImages}
        />
      </div>
    </div>
  );
}

export default EditProductPage;
