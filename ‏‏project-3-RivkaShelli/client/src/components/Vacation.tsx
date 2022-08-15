import { Button, Card } from "react-bootstrap";
import { deleteVacation, follow, getToken, unfollow} from "../actions";
import { UpdateVacModal } from "./UpdateVacModal";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Vacation(props: any) {
    let vacation = { ...props };
    // {vacation.role == 1 ? <UpdateVacModal vacation={vacation} /> : <></>}
    /*       {vacation.role == 1 ? <>
                        <Button className="btn btn-dark" onClick={(e: any) => deleteVacation(e, vacation.id)} > <AiOutlineClose /></Button>
                        <UpdateVacModal vacation={vacation} />
                    </> : <></>}*/
    

    const checkFollow = (num: number) => ((num == 1 ? 'UNFOLLOW' : 'FOLLOW'));
    const [Switch, setSwitch] = useState<any>(checkFollow(vacation.follow));
    const [bColor, setBcolor] = useState<any>(checkFollow(vacation.follow) == 'UNFOLLOW' ? 'secondary' : 'dark');
    const onfollowed = () => {
        if (Switch == 'FOLLOW') {
            setSwitch('UNFOLLOW');
            setBcolor('secondary');
            console.log(vacation.id);
            let vId = vacation.id;
            follow(vId);
        } else {
            setSwitch('FOLLOW');
            setBcolor('dark');
            unfollow(vacation.id);
        }
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>

                {vacation.role == 1 ? 
                    <>
                <button  onClick={(e) => {
                    console.log(vacation.id);
                    deleteVacation(e, vacation.id)
                        }}><AiOutlineClose /></button>
                        <UpdateVacModal vac={vacation} />
                      </>  : <></>}
                
                <Card.Img variant="top" src={`/images/${(vacation.destination).toLowerCase()}.jpg`} />
                <Card.Body>
                    <Card.Title>{props.destination}</Card.Title>
                    <Card.Text>
                        {vacation.description}
                    </Card.Text>
                    <Card.Text>
                        From: {vacation.date_from.split('T')[0]}
                    </Card.Text>
                    <Card.Text>
                        To: {vacation.date_to.split('T')[0]}
                    </Card.Text>
                    <Card.Text>
                        Price: {vacation.price} $
                    </Card.Text>
             
                    {vacation.role == 0 ? <Button variant={bColor} onClick={() => onfollowed()}>{Switch}</Button> : <></> }
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default Vacation;