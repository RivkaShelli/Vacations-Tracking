import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getAllVacations, getRole } from "../actions";
import SecondNavbar from "./SecondNavbar";
import Vacation from "./Vacation";

function Vacations() {

    const [vacationsArr, setVacationsArr] = useState<any[]>([]);
    const [role, setRole] = useState<any>(0);
    const [uid, setUid] = useState<any>(0);
    const [username, setUsername] = useState<any>('');
    useEffect((): void => {
        getRole().then(res => {
            console.log(res);
            setUid(res.uid);
            setRole(res.role);
            setUsername(res.username);
            getAllVacations(res.uid).then((res: any[]) => {
                setVacationsArr(res);
            })
        })
    } , [])


    return (
        < Container>
            <>
                <SecondNavbar role={role} username={username} />
                <br />
                <h1>My Vacation List</h1>
                <br />
                <div className="row">
                    {vacationsArr.map((v: any, i: number) => <Vacation role={role} key={i} id={v.id} follow={v.follow} description={v.description} destination={v.destination} date_from={v.date_from} date_to={v.date_to} picture={v.picture} price={v.price} followers={v.followers} />)}
                </div>
                {console.log(vacationsArr)}
            </>
        </Container>

    )
}

export default Vacations;