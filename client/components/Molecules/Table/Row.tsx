import React from 'react'
import { TableCell, TableRow, TableBody } from '@mui/material';

type Props = {}

const TabRow = (props: Props) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
        </TableBody>
    )
}

export default TabRow