import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";


const DonationPage = () => {
    const [donation,setDonation] = useState({});
    const {id}= useParams();
    
    const donations = useLoaderData();
    

    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id === id);
        setDonation(findDonation)
    },[id,donations])
  
    return (
        <div>
            <SingleCard donation={donation}></SingleCard>
            
        </div>
    );
};

export default DonationPage;