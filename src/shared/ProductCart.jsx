/* eslint-disable react/prop-types */
import {BsCartPlus} from 'react-icons/bs'

const ProductCart = (props) => {
    const { title, thumbnail, price } = props.product;
    return (
        <div>
            <div className="overflow-hidden rounded-3xl bg-white text-slate-500 hover:border-2 hover:border-blue-500 w-[340px] h-[320px] p-6 shadow-lg">
                <figure>
                    <img
                        src={thumbnail}
                        alt="card image"
                        className="w-72 h-40 rounded-3xl"
                    />
                </figure>
                <h3 className="mt-4 text-xl font-medium text-slate-700">
                    {title}
                </h3>
                <div className="my-6 flex justify-between">
                    <p className='text-orange-600'>$ { price}</p>
                    <BsCartPlus className='text-xl cursor-pointer'/>
                </div>
                
            </div>
            {/*<!-- End E-commerce card --> */}
        </div>
    );
};

export default ProductCart;