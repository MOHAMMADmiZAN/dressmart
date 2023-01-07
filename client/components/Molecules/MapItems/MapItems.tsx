import Grid from '@mui/material/Grid'
import React from 'react'


type MapItemsProps = React.PropsWithChildren<{
    items: Array<object>,
    ItemComponent: React.ElementType,
    other?: any
}>

function MapItems({ items, ItemComponent, ...other }: MapItemsProps): JSX.Element {
    return (
        <Grid container justifyContent={'space-between'} alignContent={'center'} >

            {items.map((item, i) => (
                <ItemComponent key={i} item={item} {...other} />
            )

            )}

        </Grid>
    )
}

export default MapItems