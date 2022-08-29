import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react"
import { useEffect } from "react"
import userService from "../services/user-service"
import AdminJobsTable from "./AdminJobsTable";

export default function AdminDashboard() {
    

    const [jobs, setJobs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        userService.getJobs()
        .then((response)=>{
            console.log(response.data);
            setJobs(response.data);
            setIsLoaded(true);
        })
    },[])
    
    return (
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5">Admin Dashboard</Typography>
        {isLoaded ? (
          <AdminJobsTable jobs={jobs} />
        ) : (
          <Typography variant="h6">Loading...</Typography>
        )}
      </Box>
    );
}