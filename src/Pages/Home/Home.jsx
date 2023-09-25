import { useLoaderData } from "react-router-dom";
import AllDonationCard from "../../Components/AllDonationCard/AllDonationCard";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
    const donations = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <AllDonationCard donations={donations}></AllDonationCard>
        </div>
    );
};

export default Home;