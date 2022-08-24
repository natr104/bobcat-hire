import CustomerQuotesTable from "./CustomerQuotesTable";
import { useState, useEffect } from "react";
import { API_URL } from "../utilities/utilities";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function CustomerQuotes() {

    const [userJobs, setUserJobs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { user: currentUser, jwt } = useSelector((state) => state.auth);
 

    useEffect(() => {
        if (currentUser) {
            fetch(API_URL + `users/${currentUser.id}/jobs`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setUserJobs(data);
                    setIsLoaded(true);
                });
        } else {
            return <Navigate to='/login' />
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return (
            <div>
                { isLoaded? <CustomerQuotesTable userJobs={userJobs} /> : <h2>Loading</h2> }
            </div>
    )
}