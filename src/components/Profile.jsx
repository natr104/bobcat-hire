import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Profile() {
    
    const { user: currentUser } = useSelector((state) => state.auth);
    if (!currentUser) {
        return <Navigate to='/login' />
    }
    const user = currentUser.user

    return (
        <>
        <h3>
            {user.name}'s Profile
        </h3>
        <p>{user.email}</p>
        
        </>
    )
}