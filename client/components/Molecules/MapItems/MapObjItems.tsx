import React from 'react'


type MapItemsProps = React.PropsWithChildren<{
    item: object,
    ItemComponent: React.ElementType,

}>

function MapObjItems({ item, ItemComponent }: MapItemsProps): JSX.Element {
    return (
        <>
            {
                Object.entries(item).map((v, i) =>
                    <ItemComponent key={i} item={v[1]} />
                )
            }
        </>
    )
}

export default MapObjItems