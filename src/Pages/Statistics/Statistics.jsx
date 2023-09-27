
import {ResponsiveContainer,PieChart,Pie,Cell} from 'recharts';
import { useLoaderData } from "react-router-dom";
const Statistics = () => {

    const donationItems = JSON.parse(localStorage.getItem('donations')) || []
     const donatedItems = donationItems.length;
     

     const allDonationData = useLoaderData();
      const allDonationDataLength = allDonationData.length;
      console.log(typeof(donatedItems))

      const remainingItems = allDonationDataLength - donatedItems

      const donationPercentage = (donatedItems / allDonationDataLength) * 100;

   
const data = [
    { donations: 'all donations', length:{remainingItems} },
    { donations: 'donated item', length:{donatedItems}},
    
  ];

  
  const COLORS = ['#0088FE', '#00C49F',];
      

    return (
        <div>    

<p>Donation Percentage: {donationPercentage}%</p>
            <ResponsiveContainer width='100%' >
                 <PieChart width={400} height={400}>
                 <Pie
                 data={data}
                 dataKey='value'
                 nameKey='name'
                 cx = '50%'
                 cy = '50%'
                 
                 outerRadius={80}
                 fill='#FFBB28'
                 label
                 
                 />

{
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))
            }
                 </PieChart>
            </ResponsiveContainer>
           </div>
    );
};

export default Statistics;