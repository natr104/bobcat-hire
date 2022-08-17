import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from "@mui/material";
import { useSelector } from "react-redux";



export default function CustomerQuotesTable() {

    const { user: currentUser } = useSelector((state) => state.auth)
    const user_jobs = currentUser.user.jobs

    return (
        <TableContainer component={Paper} sx={{ mt: 8 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Your Quotes</Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date & Time</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Note</TableCell>
                        <TableCell>Estimated Hours</TableCell>
                        <TableCell>Estimated Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user_jobs.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date_time}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell>{row.comment}</TableCell>
                            {/* <TableCell>{row.hours}</TableCell>
                            <TableCell align="right">{`$${row.price}`}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}