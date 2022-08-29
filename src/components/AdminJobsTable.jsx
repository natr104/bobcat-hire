import { Paper, TableContainer, Table, Typography, TableHead, TableRow, TableCell, TableBody, Link } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { dateTimeFormat } from "../utilities/utilities"



export default function AdminJobsTable({jobs}) {
    return (
        <TableContainer component={Paper} sx={{mt: 1}}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Open Quote Requests</Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date & Time</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Contact Person</TableCell>
                        <TableCell>Contact Number</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jobs.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{dateTimeFormat(row.date_time)}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.category.name}</TableCell>
                            <TableCell>{row.user.name}</TableCell>
                            <TableCell>{row.user.phone_no}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell><Link component={RouterLink} to={`/admin/jobs/${row.id}`}>View Details</Link></TableCell>
                            {/* <TableCell><Link component={RouterLink} to={`/quotes/${row.id}/edit`}>Edit</Link></TableCell> */}
                            {/* <TableCell><Link component={RouterLink} href="#" onClick={()=> handleDelete(row.id)}>Delete</Link></TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}