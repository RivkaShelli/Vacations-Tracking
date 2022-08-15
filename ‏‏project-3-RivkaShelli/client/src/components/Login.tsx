import { createRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { getRole, login } from "../actions";


function Login() {


    function buildBody() {
        return {
            username: userName.current?.value,
            password: passWord.current?.value,
        }
    }

    const userName = createRef<HTMLInputElement>();
    const passWord = createRef<HTMLInputElement>();
    const [token, setToken] = useState<any>(false);
    

    const onLogin = (e: any) => {
        e.preventDefault();
        login(buildBody).then((token)=> {
            setToken(true);
            sessionStorage.setItem('token', token.token);
        })
    }


        return (
            <>
                <div style={{ backgroundImage: '/images/vacation.jpg' }}>
                <br />
                <h1>
                    Welcome To Our Vacation Following System
                </h1>
                <h2>Login</h2>
                <br />
                <Form onSubmit={(e) => {onLogin(e);}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" required ref={userName} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type={"password"} placeholder="Enter Password" required ref={passWord} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        LOGIN
                    </Button>
                    <br />
                    <br />
                    <Link to="/register">New User? Register</Link>
                </Form>
                    <img className='home' src='/images/vacation.jpg'></img>
                    {token ? <Navigate to="/vacationsList" /> : <></>}
                </div>
            </>
        )
    }

export default Login;