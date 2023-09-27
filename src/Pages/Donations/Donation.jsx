import { useEffect, useState } from "react";
import Card from "./Card";


const Donation = () => {

    const [donations,setDonations] = useState([]);
    const [noDonation,setNoDonation] = useState(false);
    const [seeAll,setSeeAll] = useState(4)
    

   
    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'));
        if(donationItems){
            setDonations(donationItems)
        } else{
            setNoDonation('No Donations')
        }
    },[])
   
    return (
        <div className="mx-8">
            {
                noDonation ? <p className="h-[80vh] flex text-3xl font-bold justify-center items-center">{noDonation}</p> 
                
                : 
                
                <div>


                      <div className="grid grid-cols-2 gap-5">
                         {
                             donations.slice(0,seeAll).map(donation => <Card key={donation.id} donation={donation}></Card>)
                         }
                        
                        </div>  

                          <div className="flex justify-center items-center mt-6">

                         
                         {
                            donations.length > seeAll &&
                            <div className={seeAll === donations.length && 'hidden'}>
                            <button onClick={() => setSeeAll(donations.length)} className='text-white px-7 py-2 rounded-md text-lg bg-green-700' >
                              See All
                            </button>
                            </div>
                         }
                          </div>

                        
                        </div>
       

                    
                
            }
        </div>
    );
};

export default Donation;