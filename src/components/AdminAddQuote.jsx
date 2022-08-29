import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/user-service";

export default function AdminAddQuote({id, open, setOpen}) {

    const [hours, setHours] = useState();
    const [price, setPrice] = useState();
    const navigate = useNavigate();

    
    const handleClose = () => {
        setOpen(false);
    }
    function handleHoursChange(event) {
        setHours(event.target.value)
    }
    function handlePriceChange(event) {
        setPrice(event.target.value)
    }

    const handleSubmit = () => {
        console.log(price, hours)
        const data = JSON.parse(JSON.stringify({price: price, hours: hours}))
        console.log(data)
        userService.addQuote(id, data)
        .then((response)=>{
            console.log(response)
            navigate(`/admin/jobs/${id}`)
        })
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Quote</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    id="hours"
                    label="Estimated Hours"
                    variant="standard"
                    onChange={handleHoursChange}
                />
                <br />
                <TextField
                    autoFocus
                    id="price"
                    label="Estimated Cost"
                    variant="standard"
                    onChange={handlePriceChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}