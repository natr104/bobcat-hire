import { dateTimeFormat } from '../utilities/utilities'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import userService from "../services/user-service";

export default function Job() {

    let params = useParams();
    const [jobDetails, setJobDetails] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        userService.getJob(params.jobId)
        .then((response) => {
            setJobDetails(response.data)
            setIsLoaded(true)
            console.log(jobDetails)
        })
    }, []);

    return (
        <div>
            {isLoaded? <div>
            <h2>Job #{params.jobId}</h2>
            <p>{`${jobDetails.address}`}</p>
            <p>{`${jobDetails.category.name}`}</p>
            <p>{`${dateTimeFormat(jobDetails.date_time)}`}</p>
            </div> : <h2>Loading</h2>}
        </div>

    )
}