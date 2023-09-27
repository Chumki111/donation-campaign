import DonationCard from "../DonationCard/DonationCard";



const AllDonationCard = ({donations}) => {
  
    
    return (
        <div className="py-2 lg:py-12">
            
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 px-8 lg:px-10">
                {
                  donations?.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
                }
             </div>
             <div>
             
               
              
             </div>
            
        </div>
    );
};

export default AllDonationCard;