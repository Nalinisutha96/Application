import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 LineElement,
 PointElement,
 Tooltip,
 Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
 CategoryScale,
 LinearScale,
 LineElement,
 PointElement,
 Tooltip,
 Legend
);

export default function EarningsChart(){

const data={
labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
datasets:[
{
data:[25,15,22,8,18,34,20,26,12,17,10,21],
borderColor:"#3b82f6",
tension:0.4,
pointRadius:3
}
]
}

const options={
responsive:true,
maintainAspectRatio:false,
resizeDelay:0,
plugins:{legend:{display:false}}
}

return(
<div className="chart-wrapper">
<Line data={data} options={options}/>
</div>
)
}