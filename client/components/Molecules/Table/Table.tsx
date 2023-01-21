import { Paper, Table, TableContainer } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import MapItems from '../MapItems/MapItems'
import Column from './Column'
import TabRow from './Row'
import TableCell from '@mui/material/TableCell'

type Props = {
    head: Array<string>,
    content: Array<object>,
    bgcolor?: string
}

function Tab({ head, content, bgcolor }: Props) {
    return (
        <TableContainer component={Paper}>
            <Table bgcolor={bgcolor} aria-label="simple table">
                <TableHead>
                    <TableRow >

                        {head.map((u, i) => <TableCell align="center" sx={{ fontWeight: "bold" }} key={i}> {u}</TableCell>)}

                    </TableRow>
                </TableHead>
                <TableBody>
                    <MapItems ItemComponent={TabRow} items={content} />
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tab