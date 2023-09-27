
import { PieChart, Pie, Cell, } from 'recharts';
import { useLoaderData } from "react-router-dom";
const Statistics = () => {

const donationItems = JSON.parse(localStorage.getItem('donations')) 
const allDonationData = useLoaderData();
let reMainingTotal = 0;
let yourDonate;
if(donationItems){
yourDonate = donationItems.length;
reMainingTotal = allDonationData.length - yourDonate;
} else{
reMainingTotal = allDonationData.length;
}
const data = [
{ name: 'Total Donation', value: reMainingTotal },
{ name: 'Your Donate', value: yourDonate },
];
const COLORS = ['#0088FE', '#00C49F',];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
const x = cx + radius * Math.cos(-midAngle * RADIAN);
const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};   

    return (
        <div className='lg:mx-auto py-10 mx-auto md:w-[650px] md:h[650px]'>    
       <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
            <div  className='flex gap-8'>
                
                  <div className='flex gap-3 justify-center items-center'>
                  <p>Your Donation</p>
                  <p className='h-3 w-24 rounded-md bg-[#00C49F]'></p>
                  </div>
                
                <div className='flex gap-3 justify-center items-center'>
                    <p>
                      Total Donation
                    </p>
                    <p className='h-3 w-24 rounded-md bg-[#0088FE]'></p>
                </div>
            </div>



           </div>
    );
};

export default Statistics;