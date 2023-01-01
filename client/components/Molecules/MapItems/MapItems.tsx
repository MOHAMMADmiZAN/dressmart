import React from 'react'


type MapItemsProps = React.PropsWithChildren<{
    items: Array<object>,
    ItemComponent: React.ElementType,
    other?: any
}>

function MapItems({ items, ItemComponent, ...other }: MapItemsProps) : JSX.Element {
    return (
        <div>
            <ul>
                {items.map((item, i) => (
                    <ItemComponent key={i} item={item} {...other} />
                    )

                )}
            </ul>
        </div>
    )
}

export default MapItems