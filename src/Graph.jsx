import { Line } from "react-chartjs-2";
import { useRecoilValueLoadable } from "recoil"
import { patientsAtomFamily } from "./store/atoms/patient"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)


export function Graph() {
    // populating the graph data
    const patient = useRecoilValueLoadable(patientsAtomFamily("Jessica Taylor"))

    if (patient.state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }

    console.log(patient)
    const diagHisArray = patient.contents.diagnosis_history.slice(0, 6).reverse()

    // chartjs line graph 
    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    drawBorder: false,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    stepSize: 20,
                    callback: (value) => `${value} `,
                },
                min: 60,
                max: 180,
            },
        },
    }
     
    const data = {
        labels: diagHisArray.map(row => (row.month.slice(0, 3)+", "+row.year)),
        datasets: [
            {
                label: "Systolic",
                data: diagHisArray.map(column => (column.blood_pressure.systolic.value)),
                borderColor: "rgb(194, 110, 180)",
                tension: 0.4
            },
            {
                label: "Diastolic",
                data: diagHisArray.map(column => (column.blood_pressure.diastolic.value)),
                borderColor: "rgb(126, 108, 171)",
                tension: 0.4
            }
        ]
    }

    return (
        <div>
            <Line options={options} data={data}></Line>
        </div>
    )
}