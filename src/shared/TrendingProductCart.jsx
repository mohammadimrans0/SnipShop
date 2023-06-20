/* eslint-disable react/prop-types */

import image from '../assets/iphone.png';

const TrendingProductCart = (props) => {
    // eslint-disable-next-line react/prop-types
    const { title, price} = props.trendingProduct
    return (
        <div className="w-60 h-40 bg-gradient-to-br from-blue-200 to-blue-100 relative rounded-xl">
            <div className="flex gap-x-3 p-4">
                <div className="flex flex-col gap-y-3">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p>Starting</p>
                    <p className="text-orange-600">$ {price}</p>
                </div>
                <div className="">
                    <img className="absolute w-[28px], h-[190px] bottom-4 -right-12" src={image} alt={title} />
                </div>
                {/* there is no perfect image in the api that i can use. So, I use use a demo image from the outside  */}
            </div>
        </div>
    );
};

export default TrendingProductCart;
