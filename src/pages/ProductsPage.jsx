import React from 'react'
import ProductsHeader from "../components/products/header";
import ProductsStatsCard from '../components/products/statsCard';
import ProductsSearchForm from '../components/products/searchForm'
import ProductsCard from '../components/products/productsCard'


function ProductsPage() {
  return (
    <div className='p-5 pt-0'>
     <ProductsHeader />
     <ProductsStatsCard />
     {/* <ProductsSearchForm/> */}
     <ProductsCard/>
     </div>
  )
}

export default ProductsPage