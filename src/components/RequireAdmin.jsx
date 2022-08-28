import { Navigate } from "react-router-dom";
import { isAdmin } from "../utilities/utilities";

export default function RequireAdmin({children}) {
    if (!isAdmin) {
        return <Navigate to='/' replace />;
    }
    return children;
}