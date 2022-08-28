import { format, parseISO } from 'date-fns'

export const API_URL = 'http://127.0.0.1:3000/api/v1/'

export async function fetchUserJobs({userId}) {
    const userURL = API_URL+`users/${userId}/jobs`;

    try {
        const response = await fetch(userURL);
        const data = await response.json();
        return data;
    } catch(error) {
        alert(error);
    }
}

export function dateTimeFormat(dateTime) {
    return format(parseISO(dateTime), 'PPPP p')
}
