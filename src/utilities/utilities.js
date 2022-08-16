const API_URL = 'http://127.0.0.1:3000/api/v1'

export async function fetchUserProfile({user_id}) {
    const userURL = API_URL+`Users/${user_id}`;

    try {
        const response = await fetch(userURL);
        const profile = await response.json();
        return profile;
    } catch(error) {
        alert(error);
    }
}