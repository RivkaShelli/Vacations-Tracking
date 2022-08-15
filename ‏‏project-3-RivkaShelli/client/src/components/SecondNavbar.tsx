import { Container, Nav, Navbar } from "react-bootstrap";

function SecondNavbar(props:any) {


    return (
        <>
            {props.role == 1 ?
                 <Navbar bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand>Hello {props.username} </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/vacationsList">Vacation List</Nav.Link>
                            <Nav.Link href="/addVacation">Add Vacation</Nav.Link>
                            <Nav.Link href="/reports">Reports</Nav.Link>
                            <Nav.Link href="/" onClick={() => sessionStorage.removeItem('token')}>Logout</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
                :
                <Navbar bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand>Hello {props.username}</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/vacationsList">Vacation List</Nav.Link>
                            <Nav.Link href="/" onClick={() => sessionStorage.removeItem('token')}>Logout</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
                }
        </>
    )
}

export default SecondNavbar;