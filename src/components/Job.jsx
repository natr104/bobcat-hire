import { dateTimeFormat, isAdmin } from '../utilities/utilities'
import { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom"
import { Button, Link } from '@mui/material';
import userService from "../services/user-service";
import AdminAddQuote from './AdminAddQuote';


export default function Job() {

    let params = useParams();
    const [jobDetails, setJobDetails] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }

    useEffect(() => {
        userService.getJob(params.jobId)
        .then((response) => {
            setJobDetails(response.data)
            setIsLoaded(true)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div>
        {isLoaded ? (
          <div>
            <h2>Job #{params.jobId}</h2>
            <p>{`${jobDetails.address}`}</p>
            <p>{`${jobDetails.category.name}`}</p>
            <p>{`${dateTimeFormat(jobDetails.date_time)}`}</p>
            <p>{jobDetails.comment}</p>

            {jobDetails.quote? (
                <div>
                <h3>Quote</h3>
                <p>Estimated hours: {jobDetails.quote.hours}</p>
                <p>Estimated cost: ${jobDetails.quote.price}</p>
                </div>
            ): (null)}
            {isAdmin() ? (
                <div>
                    <Button variant="outlined" onClick={handleClickOpen}>Add quote</Button>
                    <AdminAddQuote id={params.jobId} open={open} setOpen={setOpen}/>
                </div>
            ) : (
                null
            )}
            <Link component={RouterLink} to={-1}>
              Back
            </Link>
          </div>
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    );
}