import { useState } from "react";


const Banner = ({donations}) => {

   const campaigns = donations

  const [fullCampaigns,setFullCampaigns] = useState(campaigns)
  const [filteredItems, setFilteredItems] = useState(campaigns);
 
  // const [searchTerm, setSearchTerm] = useState('');
//  const [filteredItems, setFilteredItems] = useState([]);
  //  const handleInputChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  // const handleSearch = () => {
  //   const filtered = donations?.filter(item => item.category.toLowerCase().includes(searchTerm.toLowerCase()));
  //   setFilteredItems(filtered);

    
  // };
  const handleSearch = e => {
    const search = document.getElementById('input').value;

    e.preventDefault();

    if(search.length){
      const FilterCampaigns = fullCampaigns.filter(campaign => campaign.category.toLowerCase() === search.toLowerCase());
      if(FilterCampaigns){
        setFilteredItems(FilterCampaigns)
      } else{
        setFilteredItems(fullCampaigns)
      }
        }
  }

  
  
  return (
    <div>

      <div className="hero min-h-screen bg-opacity-[-5]" style={{ backgroundImage: 'url(https://i.ibb.co/5kCMyZC/Rectangle-4281.png)' }}>

        <div className="hero-overlay ">


        </div>
        <div className=" text-center text-neutral-content">

          <h1 className="mb-4 text-4xl font-bold">I Grow By Helping People In Need</h1>

          <div>
            <input type="text" id="input"  placeholder="Search here...." className="input input-bordered w-full max-w-xs" />
            <button onClick={handleSearch} className="btn outline-none bg-[#FF444A] text-center py-3 px-5 rounded-md">Search</button>
          </div>
        </div>

      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="w-[312px] h-[250] border rounded-md">
              <div style={{ background: 'rgba(0, 82, 255, 0.15)' }}>
                <img src={item.image} alt={item.title} />
                <div className="px-4 py-4 space-y-2">
                  <div>
                    <p className="border w-24 rounded-lg py-1 text-center" style={{ color: 'rgb(0, 82, 255)', background: 'rgba(0, 82, 255, 0.2)' }}>{item.category}</p>
                  </div>
                  <div>
                    <h2 style={{ color: 'rgb(0, 82, 255)' }}>{item.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>hi</p>
        )}
      </div> */}


    </div>

    
  );
};

export default Banner;