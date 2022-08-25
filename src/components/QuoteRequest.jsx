import { Paper, Box, TextField, Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { API_URL } from "../utilities/utilities";
import { Navigate } from "react-router-dom";

import { DateTimePickerElement, FormContainer } from "react-hook-form-mui";

export default function QuoteRequest() {

    const [ categories, setCategories ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            address: ''
        }
    });
    const onSubmit = (data) => {
        const job = JSON.stringify({"job": data})
        console.log(job)
    };
    const { user: currentUser, jwt } = useSelector((state) => state.auth);
    useEffect(() => {
        if (currentUser) {
            fetch(API_URL + `categories/`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setCategories(data);
                    setIsLoaded(true);
                });
        } else {
            return <Navigate to='/login' />
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Box sx={{ width: ["auto", 500], mx: "auto" }}>
            <Paper
                elevation={3}
                sx={{
                    marginTop: "5vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                }}>
                <h2>Quote</h2>

                {isLoaded ? <div>
                    <FormControl sx={{ mt: 2, minWidth: 220 }}>
                            <TextField disabled label="Name" variant="standard" defaultValue={currentUser.name}/>
                    </FormControl>
                    <FormContainer defaultValues={{date_time: '', address: '', comment: ''}} onSuccess={handleSubmit(onSubmit)}>
                    <FormControl sx={{ mt: 2, minWidth: 220 }}>  
                        <DateTimePickerElement name="date_time" label="Date & Time" minDateTime={new Date()} inputFormat="dd/MM/yyyy hh:mm a" required></DateTimePickerElement>
                    </FormControl>
                        <Controller
                            name="address"
                            control={control}
                            render={({ field }) => <FormControl sx={{ mt: 2, minWidth: 220 }}><TextField {...field} multiline required label="Address" variant="standard" /></FormControl>}
                            />
                        <br/>
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => <FormControl sx={{ mt: 3, minWidth: 220, textAlign: 'left' }}><InputLabel>Category</InputLabel><Select {...field} required label="Category">{categories.map((cat) => (<MenuItem key={cat.id} value={cat.id}>{`${cat.name}`}</MenuItem>))}</Select></FormControl>}
                            />
                        <br/>
                        <Controller
                            name="comment"
                            control={control}
                            render={({ field }) => <FormControl sx={{ mt: 2, minWidth: 220 }}><TextField {...field} multiline label="Comment" variant="standard" /></FormControl>}
                            />
                        <input type="submit"/>
                    </FormContainer></div>: <h2> Loading...</h2>}
                            
            </Paper>
        </Box>

    );
} 