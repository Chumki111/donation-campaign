

const SingleCard = ({donation}) => {

    const { id,image, title, category,card_background,title_category_color,category_bg_color,description } = donation|| {}
    return (
        <div>
            <div className="flex justify-center">
                
                <div className="w-[1000px] rounded-md">
                       <img src={image} className="w-full rounded-lg"></img>
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