

import ImgUploaderSec  from '../components/add-products/imgUploaderSec.jsx'
import  AddProductsHeader from '../components/add-products/header.jsx'
import EnteredDataSec from '../components/add-products/enteredDataSec.jsx';
import { useState } from 'react';
import api from "../lib/api.js"

function AddProduct(){
  const [productImages, setProductImages] = useState([]);
const addProduct = (formData) => {
   return api.post("/products", formData)
}
return(

    < div className="w-[90%] fle items-center justify-center h-auto p-5 bg-(--bg-primary) text-(--text-primary) rounded-2xl - m-auto mt-5">
      <AddProductsHeader/>
      <ImgUploaderSec onImagesChange={setProductImages}/>
      <EnteredDataSec addProduct={addProduct} productImages={productImages}/>
    </div>
   
)
}

export default AddProduct