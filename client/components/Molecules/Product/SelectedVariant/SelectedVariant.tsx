import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {colorBtnStyle} from "./SelectedVariant.style";
import {singleProductResponse} from "../../../../api/Product.api";

interface SELECTED_VARIANT_PROPS {
    Product: singleProductResponse | undefined,
    categoryLinkRef?: React.RefObject<HTMLAnchorElement>,
    ProductImage?: string,
    setProductImage?: (arg0: string) => void
    selectedColor?: number,
    setSelectedColor?: (arg0: number) => void


}

const SelectedVariant: React.FC<SELECTED_VARIANT_PROPS> = ({Product, categoryLinkRef, setProductImage,setSelectedColor,selectedColor}) => {
    const [colorBoxRefs, setColorBoxRefs] = useState<
        React.RefObject<HTMLButtonElement>[]
    >([]);
    useLayoutEffect(() => {
        Product?.variants && setColorBoxRefs(Product.variants.map((_) => React.createRef<HTMLButtonElement>()))

    }, [Product?.variants, Product?.variants.length])


    useEffect(() => {
        if (colorBoxRefs.length > 0) {
            let colorBoxRef = colorBoxRefs[0];
            // colorBoxRef.current?.focus();
            colorBoxRef.current?.click();
            categoryLinkRef?.current?.setAttribute('style', `color: ${colorBoxRef.current?.getAttribute('data-color')}`)
            if (setSelectedColor) {
                setSelectedColor(Number(colorBoxRef.current?.getAttribute('data-id')) || 0)
            }


        }

    }, [categoryLinkRef, colorBoxRefs, setSelectedColor])

    const handleVariantClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        const variantImage = target.getAttribute('data-image');
        if (setProductImage) {
            setProductImage(variantImage ? variantImage : '')
        }
        target.getAttribute('data-stock');
        const variantColor = target.getAttribute('data-color');
        categoryLinkRef?.current?.setAttribute('style', `color: ${variantColor}`)
        if (setSelectedColor) {
            setSelectedColor(Number(target.getAttribute('data-id')) || 0)
        }


    }


    return (
        <>
            <Box sx={{m: '10px', display: 'flex', alignItems: `center`, p: `0`}}>
                <Typography component={`h6`} variant={`subtitle1`}
                            sx={{mr: 1, fontWeight: 600}}> Choose Color:</Typography>
                {Product?.variants?.map((variant, index) => {
                        return (
                            <Box component={`button`} bgcolor={variant.color}
                                 sx={{
                                     ...colorBtnStyle,
                                     transform: selectedColor === variant.id ? 'scale(1.3)' : 'scale(1)'
                                 }}
                                 onClick={handleVariantClick} data-image={variant.image}
                                 data-stock={variant.stock} key={variant.id}
                                 data-color={variant.color}
                                 data-id={variant.id} ref={colorBoxRefs[index]}/>
                        )
                    }
                )}
            </Box>

        </>
    );
};

export default SelectedVariant;