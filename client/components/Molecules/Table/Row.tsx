import React from 'react'
import { TableCell, TableRow, TableBody } from '@mui/material';
import MapItems from '../MapItems/MapItems';
import Column from './Column';
import MapObjItems from '../MapItems/MapObjItems';

type Props = { item: string[] }

// TODO: need to implement whole table 

const TabRow = (props: Props) => {
    return (
        <TableRow>
            <MapObjItems ItemComponent={Column} item={props.item} />

        </TableRow>

    )
}

export default TabRow