import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as MLink } from '@mui/material'
import { dateTimeFormat } from "../utilities/utilities";
import userService from '../services/user-service'


export default function CustomerQuotesTable({userJobs, setUserJobs}) {

    const handleDelete = (id) => {
        userService.deleteJob(id)
        setUserJobs(jobs => jobs.filter((job) => job.id != id ))
        console.log(userJobs)
    }

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
                    {userJobs.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{dateTimeFormat(row.date_time)}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.category.name}</TableCell>
                            <TableCell>{row.comment}</TableCell>
                            <TableCell>{row.quote?.hours}</TableCell>
                            <TableCell align="right">{row.quote?.price}</TableCell>
                            <TableCell><Link to={`/quotes/${row.id}`}>View</Link></TableCell>
                            <TableCell><Link to={`/quotes/${row.id}/edit`}>Edit</Link></TableCell>
                            <TableCell><MLink href="#" onClick={()=> handleDelete(row.id)}>Delete</MLink></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}