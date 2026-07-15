import EditProductsHeader from "../components/products/EditProductsHeader";
import EditProductImgUploader from "../components/products/EditProductImgUploader";
import EditProductDataSec from "../components/products/EditProductDataSec";

function EditProductPage() {
return(
  <div className="p-6">
    <EditProductsHeader/>
    <EditProductImgUploader />
    <EditProductDataSec />

  </div>
)

}

export default EditProductPage;