import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react'

import { Grid } from '@mui/material';
import { getFilterdProducts, recentProduct, recentProductArray } from '../../../api/Product.api';
import ProductCard from '../../Molecules/Product/ProductCard/ProductCard';


function Filter() {

    const router = useRouter();

    const slug = router.query.slug as string

    const nameTags = slug.split('-')

    let url = '';
    nameTags?.map((tags: string) => {
        url += `filters[$or][0][name][$containsi]=${tags}&`;
    });

    url = url.slice(0, -1);

    const { data: filteredProducts, isLoading } = useQuery({
        queryKey: ['filteredProducts', url],
        queryFn: () => getFilterdProducts(url),
    });


    if (isLoading || !filteredProducts) {
        return <div>loading... </div>
    }

    return (
        <Grid container={true} sx={{ p: '20px' }}>{filteredProducts.length > 0 ?
            filteredProducts.map((product: recentProduct) => {
                return (

                    <Grid item={true} xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard ProductCardImage={product.thumbnail} ProductCardRating={product.rating}
                            ProductCardTitle={product.name}
                            ProductCardModel={product.model}
                            ProductCardPrice={product.regularPrice}
                            ProductID={product.id} />
                    </Grid>
                )

            })
            : <h1 style={{ textAlign: 'center', margin: "30px" }} >No Products Found</h1>}
        </Grid>
    )
}

export default Filter