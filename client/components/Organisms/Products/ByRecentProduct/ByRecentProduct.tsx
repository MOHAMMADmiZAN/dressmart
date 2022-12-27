import React, {useEffect} from 'react';
import SectionTitle from "../../../Molecules/Shared/SectionTitle/SectionTitle";
import {fetchProducts, recentProduct, recentProductArray} from "../../../../api/Product.api";
import {useQuery} from "@tanstack/react-query";

function ByRecentProduct() {
     // fetch products by react query
     const {data, isLoading, isError, error} = useQuery<recentProductArray,Error>(["recentProducts"], fetchProducts);

    useEffect(() => {
       fetchProducts().then(
              (res) => {
                  console.log(res);
                  res.map((product:recentProduct) => {
                      console.log(product.variants[0].image.src.url);
                  })
              }
       )

    },[data]);



    return (
        <>
            <SectionTitle SectionTitleTitle={`Most Recent Products`}/>
            {isLoading && <p>Loading...</p>}
            {data && data.map((product:recentProduct) => {
                return (
                    <div key={product.id}>
                        <img src={product.variants[0].image.src.url} alt={product.name} width={150} height={150}/>
                        <p>{product.name}</p>
                    </div>
                )
            })}


        </>
    );
}

export default ByRecentProduct;