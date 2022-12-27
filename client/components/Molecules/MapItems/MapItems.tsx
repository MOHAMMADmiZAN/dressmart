import React from 'react'


type AppProps = {
    items: Array<object>,
    ItemComponent: any,
    other: any

}

function MapItems({ items, ItemComponent, ...other }: AppProps) {
    return (
        <div>
            <ul>
                {items.map((item: Object, i: number) => {
                    return <ItemComponent key={i} item={item} {...other} />
                })}
            </ul>
        </div>
    )
}

export default MapItems