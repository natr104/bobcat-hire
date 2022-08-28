import axios from "axios";
import authHeader from "./auth-header";
const API_URL = 'http://127.0.0.1:3000/api/v1'

const createJob = (job) => {
    return axios.post(API_URL + '/jobs', {'job': job}, { headers: authHeader() })
};

const getJob = (jobId) => {
    return axios.get(API_URL + `/jobs/${jobId}`, { headers: authHeader() })
}

export default {
    createJob,
    getJob
};