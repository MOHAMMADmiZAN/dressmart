import React, {memo} from 'react'


type MapItemsProps = React.PropsWithChildren<{
    items: Array<string | object>,
    ItemComponent: React.ElementType,
    other?: any
}>

function MapItems({ items, ItemComponent, ...other }: MapItemsProps): JSX.Element {
    return (
        <>

            {items.map((item, i) => (
                <ItemComponent key={i} item={item} {...other} />
            )

            )}

        </>
    )
}

export default memo(MapItems)