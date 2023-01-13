import TableCell from '@mui/material/TableCell'
import React from 'react'

type Props = {}
// TODO: Will remove static data and add dynamic data by props collection
const Column = (props: Props) => {
    return (
        <TableCell align="right">Calories</TableCell>
    )
}

export default Column