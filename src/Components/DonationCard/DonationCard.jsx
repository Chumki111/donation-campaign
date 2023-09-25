import { Link } from "react-router-dom";

const DonationCard = ({ donationCard }) => {
    const { id,image, title, category,card_background,title_category_color,category_bg_color } = donationCard || {}

    
    return (
        
         <Link to={`/donation/${id}`}>
         
         
         <div className="w-[312px] h-[250] border rounded-md" style={{background:card_background}}>
                <img src={image}></img>
                <div className="px-4 py-4 space-y-2">
                <div>
                    <p className="border w-24 rounded-lg py-1 text-center" style={{color:title_category_color,background :category_bg_color}}>
                    
                        {category}
                    </p>
                </div>
                <div>
                    <h2 className="" style={{color:title_category_color}}>
                         {title}
                    </h2>
                </div>
                </div>

            </div>
         
         
         </Link>


        
    );
};

export default DonationCard;