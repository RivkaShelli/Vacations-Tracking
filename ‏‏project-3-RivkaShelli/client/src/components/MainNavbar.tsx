import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddVacation from "./AddVacation";
import Login from "./Login";
import Register from "./Register";
import Reports from "./Reports";
import SecondNavbar from "./SecondNavbar";
import Vacations from "./Vacations";

function MainNavbar() {
    return (
        <>

            <BrowserRouter>

                <Container>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/vacationsList" element={<Vacations />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/addVacation" element={<AddVacation />} />
                    </Routes>

                </Container>

            </BrowserRouter>

        </>
    )
}

export default MainNavbar;