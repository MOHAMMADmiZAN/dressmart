import TableCell from '@mui/material/TableCell'
import React from 'react'

type ColProps = { item: string | number }

const Column = (props: ColProps) => {
    return (
        <TableCell align="center">{props.item}</TableCell>
    )
}

export default Column