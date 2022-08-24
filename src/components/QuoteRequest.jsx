import { Paper, Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function QuoteRequest() {

    const { categories, setCategories } = useState([]);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            address: ''
        }
    });
    const onSubmit = (data) => {
        const job = JSON.stringify({"job": data})
    }


    return (
        <Box>
            <Paper>
                <h2>Quote</h2>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => <TextField {...field} required label="Address" variant="standard" />}
                    />
                </form>
            </Paper>
        </Box>
        
    );
} 