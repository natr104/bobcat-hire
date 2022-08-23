import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Profile() {
    
    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)
    if (!currentUser) {
        return <Navigate to='/login' />
    }


    return (
        <>
        <h3>
            {currentUser.name}'s Profile
        </h3>
        <p>{currentUser.email}</p>
        
        </>
    )
}