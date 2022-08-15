import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getReports, getRole } from '../actions';
import SecondNavbar from './SecondNavbar';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

function Reports() {

     const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Reports',
            },
        },
    };

    const [vacationsArr, setvacationsArr] = useState([]);

    useEffect(() => {
        getReports().then(res => setvacationsArr(res));
    }, []);

    { console.log(vacationsArr) };

    const labels = vacationsArr.map(v => v["destination"]);

    console.log(labels);

    const followersArr = vacationsArr.map(v => v["followers"]);

     const data = {
        labels,
        datasets: [
            {
                label: 'followers',
                data: followersArr,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const [role, setRole] = useState<any>(0);
    const [username, setUsername] = useState<any>('');
    useEffect((): void => {
        getRole().then(res => {
            setRole(res.role);
            setUsername(res.username);
        })
    }, [])

    return (
        <>
            <SecondNavbar role= {role} username={username} />
            <Bar options={options} data={data} />

        </>
    )
}

export default Reports;