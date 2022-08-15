import { createRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { register } from "../actions";

function Register() {

    function buildBody() {
        return {
            first_name: firstName.current?.value,
            last_name: lastName.current?.value,
            username: userName.current?.value,
            password: passWord.current?.value,
        }
    }

    const firstName = createRef<HTMLInputElement>();
    const lastName = createRef<HTMLInputElement>();
    const userName = createRef<HTMLInputElement>();
    const passWord = createRef<HTMLInputElement>();

    const [reg, setReg] = useState(false);

    return (
        <>
            <br />
            <h1>Register</h1>
            <br/>
            <Form onSubmit={(e) => {
                register(e, buildBody).then(res=> setReg(true));
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter First name" required ref={firstName}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" required ref={lastName}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" required ref={userName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" required ref={passWord} />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Register
                </Button>
            </Form>
            {reg ? <Navigate to="/" /> : <></>}
        </>
    )
}

export default Register;