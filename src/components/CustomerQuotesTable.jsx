import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from "@mui/material";

function createData(id, date, address, type, note, hours, price) {
    return { id, date, address, type, note, hours, price };
  }

const rows = [
    createData(
        0,
        '10 Aug, 2022',
        '123 Fake Street, Sydney',
        "Pool",
        "Difficult access to property",
        8,
        720.00        
    )
]

export default function CustomerQuotesTable() {

    return (
        <TableContainer component={Paper}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Your Quotes</Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Note</TableCell>
                        <TableCell>Estimated Hours</TableCell>
                        <TableCell>Estimated Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.note}</TableCell>
                            <TableCell>{row.hours}</TableCell>
                            <TableCell align="right">{`$${row.price}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}