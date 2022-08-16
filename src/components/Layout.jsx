import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div class="Layout">
            <Navbar />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}