
import swal from 'sweetalert';
import './SignleCard.css'
const SingleCard = ({donation}) => {

    const { id,image, title, title_category_color,description,price} = donation|| {}

    const handleDonateBtn = () => {
        const addedDonationsArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'))
        if(!donationItems){
            addedDonationsArray.push(donation)
            localStorage.setItem('donations',JSON.stringify(addedDonationsArray))
            swal("Good job!", "You donated successfully!", "success");
        } else {
            const isExits = donationItems.find(item => item.id === id)
            if(!isExits){
                addedDonationsArray.push(...donationItems,donation)
                localStorage.setItem('donations',JSON.stringify(addedDonationsArray))
                swal("Good job!", "You donated successfully!", "success");
            } else{
                swal("Error!", "You did'nt donate successfully!", "error");
            }
            
        }
       

   
    }
    
    return (
        <div>
            <div className="flex justify-center">
                
                <div className="w-[1000px] rounded-md">
                       <div className='relative'>

                       <img src={image} className="w-full rounded-lg block" id="image"></img>
                       <div className='overlay'>
                        <button onClick={handleDonateBtn}  className='text-white px-6 py-3 mt-7 ml-6 rounded-md text-lg' style={{background : title_category_color}}>Donate ${price}</button>
                       </div>
                       </div>
                       <div className="px-2 py-4 space-y-3">
                      
                       <div>
                           <h2 className="font-bold text-3xl">
                                {title}
                           </h2>
                       </div>
                       <div>
                           <p className="text-justify text-base text-[#0B0B0B]">
                           {description}
                               
                           </p>
                       </div>
                       </div>
       
                   </div>
                
                   </div>
        </div>
    );
};

export default SingleCard;