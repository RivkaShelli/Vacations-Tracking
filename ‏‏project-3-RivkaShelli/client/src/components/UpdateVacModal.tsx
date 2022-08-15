import { createRef, MouseEvent, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { updateVacation } from "../actions";
import { AiFillEdit } from "react-icons/ai";

export function UpdateVacModal(props: any) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const destRef = createRef<HTMLInputElement>();
    const descRef = createRef<HTMLInputElement>();
    const picRef = createRef<HTMLInputElement>();
    const fromRef = createRef<HTMLInputElement>();
    const toRef = createRef<HTMLInputElement>();
    const priceRef = createRef<HTMLInputElement>();

    const buildBody = () => {
        let body = {
            descriprion: descRef.current?.value,
            destination: destRef.current?.value,
            picture: picRef.current?.value,
            date_from: fromRef.current?.value,
            date_to: toRef.current?.value,
            price: priceRef.current?.value
        }
        console.log(body);
        return body;
    }
    return (
        <>
            <button onClick={handleShow}>
                <AiFillEdit />
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Vacation - {props.vac.destination}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" placeholder={props.vac.destination} ref={destRef} />
                            <Form.Label>Descriprion</Form.Label>
                            <Form.Control type="text" placeholder={props.vac.description} ref={descRef} />
                            <Form.Label>Picture</Form.Label>
                            <Form.Control type="text" placeholder={props.vac.picture} ref={picRef} />
                            <Form.Label>From-Date</Form.Label>
                            <Form.Control type="DATE" placeholder={props.vac.from_date} ref={fromRef} />
                            <Form.Label>To-Date</Form.Label>
                            <Form.Control type="DATE" placeholder={props.vac.to_date} ref={toRef} />
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder={props.vac.price} ref={priceRef} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={(e) => {
                        console.log(1);
                        updateVacation(e, props.vac.id, buildBody);
                        window.location.reload();
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

