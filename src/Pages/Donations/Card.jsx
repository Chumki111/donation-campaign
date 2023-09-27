


const Card = ({donation}) => {
    

    const { id,image, title, category,card_background,title_category_color,category_bg_color,price } = donation || {}

    

    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border  shadow-md" style={{background: card_background}}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border ">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-2 block border w-24 rounded-lg py-1 text-center font-sans text-lg font-semibold leading-relaxed tracking-normal  antialiased" style={{color:title_category_color,background :category_bg_color}}>
                       {category}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mb-4 block font-sans  font-semibold text-lg leading-relaxed text-gray-700 antialiased" style={{color: title_category_color}}>
                        ${price}.00
                    </p>
                    <a className="inline-block" href="#">
                    <button className='text-white px-6 py-3 rounded-md text-lg' style={{background : title_category_color}}>View Details</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Card;