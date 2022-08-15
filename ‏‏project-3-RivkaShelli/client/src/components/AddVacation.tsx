import { createRef, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { addVacation, getRole } from "../actions";
import SecondNavbar from "./SecondNavbar";

function AddVacation() {

    function buildBody() {
        return {
            description: description.current?.value,
            destination: destination.current?.value,
            picture: picture.current?.value,
            date_from: date_from.current?.value,
            date_to: date_from.current?.value,
            price: price.current?.value
        }
    }

    const description = createRef<HTMLInputElement>();
    const destination = createRef<HTMLInputElement>();
    const picture = createRef<HTMLInputElement>();
    const date_from = createRef<HTMLInputElement>();
    const date_to = createRef<HTMLInputElement>();
    const price = createRef<HTMLInputElement>();

    const [role, setRole] = useState<any>(0);
    const [username, setUsername] = useState<any>('');
    const [add, setAdd] = useState<any>(false);
    useEffect((): void => {
        getRole().then(res => {
            setRole(res.role);
            setUsername(res.username);
        })
    }, [])


    return (
        <>
            <SecondNavbar role={role} username={username} />
            <h1>Add Vacation</h1>

            <Form onSubmit={(e) => {
                addVacation(e, buildBody);
                setAdd(true);
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" required ref={description} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Destination:</Form.Label>
                    <Form.Control type="text" required ref={destination} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture:</Form.Label>
                    <Form.Control type="text" required ref={picture} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>From:</Form.Label>
                    <Form.Control type="date"  required ref={date_from} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>To:</Form.Label>
                    <Form.Control type="date"  required ref={date_to} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" required ref={price} />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Add
                </Button>
            </Form> 
            {add ? <Navigate to="/vacationsList" /> : <></> }
        </>
    )
}

export default AddVacation;